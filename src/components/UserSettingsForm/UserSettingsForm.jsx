import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectUserData } from '../../redux/auth/selectors';
import { apiUpdateUser, getUserInfo } from '../../redux/auth/operations';
import { getWaterNorm } from '../../helpers/getWaterNorm';
import css from './UserSettingsForm.module.css';
import sprite from '../../assets/icons.svg';

const schema = yup.object().shape({
	avatar: yup.mixed(),

	gender: yup
		.string()
		.nullable()
		.oneOf(['Woman', 'Man'], 'Please select your gender'),

	name: yup
		.string()
		.min(2, 'Name must be greater than or equal to 2 characters long')
		.max(40, 'Name must be less than or equal to 40 characters long'),

	email: yup.string().email('Please enter a valid email address'),

	weight: yup
		.number()
		.nullable()
		.min(40, 'Weight must be greater than or equal to 40')
		.max(120, 'Weight must be less than or equal to 120')
		.transform((value, originalValue) => {
			if (originalValue === '') return null;
			return value;
		}),

	timeActive: yup
		.number()
		.nullable()
		.min(0)
		.max(12, 'Time must be less than or equal to 12')
		.transform((value, originalValue) => {
			if (originalValue === '') return null;
			return value;
		}),

	waterNorm: yup
		.string()
		.nullable()
		.transform((value, originalValue) => {
			if (originalValue === '') return null;
			return value;
		})
		.test('is-decimal', 'Please enter a valid number', value => {
			if (value === undefined || value === null || value === '') return true;
			return !isNaN(parseFloat(value)) && isFinite(value);
		})
		.test('min-value', 'Value must be greater than or equal to 0.05', value => {
			if (value === undefined || value === null || value === '') return true;
			return parseFloat(value) >= 0.1;
		})
		.test('max-value', 'Value must be less than or equal to 5', value => {
			if (value === undefined || value === null || value === '') return true;
			return parseFloat(value) <= 5;
		}),
});

const UserSettingsForm = ({ onClose }) => {
	const user = useSelector(selectUserData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserInfo());
	}, [dispatch]);

	const [avatarUrl, setAvatarUrl] = useState(null);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			gender: user.gender,
			name: user.name,
			email: user.email,
			weight: user.weight,
			timeActive: user.timeActive,
			waterNorm: user.waterNorm / 1000,
		},
	});

	useEffect(() => {
		setValue('gender', user.gender);
		setValue('name', user.name);
		setValue('email', user.email);
		setValue('weight', user.weight);
		setValue('timeActive', user.timeActive);
		setValue('waterNorm', user.waterNorm / 1000);
	}, [user, setValue]);

	const handleAvatarUpload = event => {
		const file = event.target.files[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setAvatarUrl(url);
			setValue('avatar', file);
		}
	};

	const onSubmit = async data => {
		console.log('Submitting form data:', data);

		data.waterNorm = data.waterNorm * 1000;

		const formData = new FormData();

		for (const key in data) {
			if (key === 'avatar') {
				if (data[key]) {
					formData.append(key, data[key]);
					console.log('Avatar added to formData:', data[key]);
				}
				continue;
			}
			if (data[key] === '' || data[key] === undefined || data[key] === null) {
				continue;
			}
			formData.append(key, data[key]);
		}

		console.log('FormData to be sent:', formData);

		const response = await dispatch(apiUpdateUser(formData));
		console.log('Response from server:', response);

		if (response.meta.requestStatus === 'fulfilled') {
			onClose();
		}
	};

	const { avatar, gender, name, email, weight, timeActive, waterNorm } =
		watch();

	const isAnyFieldFilled =
		avatar || gender || name || email || weight || timeActive || waterNorm;

	const recommendedWaterNorm = getWaterNorm(gender, weight, timeActive);

	return (
		<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={css.avatarContainer}>
				{avatarUrl ? (
					<img src={avatarUrl} alt='Avatar' className={css.avatar} />
				) : (
					<img src='placeholder.jpg' alt='Avatar' className={css.avatar} />
				)}
				<label className={css.avatarUpload}>
					<svg className={css.uploadIcon}>
						<use href={`${sprite}#icon-upload-avatar`}></use>
					</svg>
					Upload a photo
					<input
						type='file'
						accept='image/*'
						{...register('avatar')}
						onChange={handleAvatarUpload}
						className={css.avatarInput}
					/>
				</label>
			</div>

			<div className={css.settingsContainer}>
				<div>
					<label className={css.optionTitle}>Your gender identity</label>
					<div className={css.genderOptions}>
						<label className={css.radioBox}>
							<input
								className={css.radio}
								type='radio'
								name='gender'
								value='Woman'
								{...register('gender')}
							/>
							Woman
						</label>
						<label className={css.radioBox}>
							<input
								className={css.radio}
								type='radio'
								name='gender'
								value='Man'
								{...register('gender')}
							/>
							Man
						</label>
						{errors.gender && (
							<span className={css.error}>This field is required</span>
						)}
					</div>
				</div>

				<div className={css.userInfo}>
					<div className={css.formGroup}>
						<div className={css.fieldsGroup}>
							<div className={css.inputGroup}>
								<label className={css.optionTitle}>Your name</label>
								<input
									className={css.textInput}
									type='text'
									{...register('name', { required: true })}
								/>
								{errors.name && (
									<span className={css.error}>This field is required</span>
								)}
							</div>

							<div className={css.inputGroup}>
								<label className={css.optionTitle}>Email</label>
								<input
									className={css.textInput}
									type='email'
									{...register('email', { required: true })}
								/>
								{errors.email && (
									<span className={css.error}>This field is required</span>
								)}
							</div>
						</div>
						<div className={css.fieldsGroup}>
							<label className={css.optionTitle}>My daily norma</label>
							<ul className={css.formulaGroup}>
								<li className={css.formulaContainer}>
									<p>For woman:</p>
									<p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
								</li>
								<li className={css.formulaContainer}>
									<p>For man:</p>
									<p className={css.formula}>V=(M*0,04) + (T*0,6)</p>
								</li>
							</ul>
							<div className={css.normaInfo}>
								<p className={css.normaInfoText}>
									<span className={css.formula}>*</span> V is the volume of the
									water norm in liters per day, M is your body weight, T is the
									time of active sports, or another type of activity
									commensurate in terms of loads (in the absence of these, you
									must set 0)
								</p>
							</div>
							<p>
								{' '}
								<span className={css.formula}>!</span> Active time in hours
							</p>
						</div>
					</div>

					<div className={css.formGroup}>
						<div className={css.fieldsGroup}>
							<div className={css.inputGroup}>
								<label>Your weight in kilograms:</label>
								<input
									className={css.textInput}
									type='text'
									{...register('weight', { required: true })}
								/>
								{errors.weight && (
									<span className={css.error}>This field is required</span>
								)}
							</div>
							<div className={css.inputGroup}>
								<label>The time of active participation in sports:</label>
								<input
									className={css.textInput}
									type='text'
									{...register('timeActive', { required: true })}
								/>
								{errors.timeActive && (
									<span className={css.error}>This field is required</span>
								)}
							</div>
						</div>
						<div className={css.fieldsGroup}>
							<div className={css.requiredWaterGroup}>
								<label>The required amount of water in liters per day:</label>
								<p className={css.formula}>{`${recommendedWaterNorm} L`}</p>
							</div>

							<div className={css.inputGroup}>
								<label className={css.optionTitle}>
									Write down how much water you will drink:
								</label>
								<input
									className={css.textInput}
									type='text'
									{...register('waterNorm', { required: true })}
								/>
								{errors.waterNorm && (
									<span className={css.error}>This field is required</span>
								)}
							</div>
						</div>
					</div>
				</div>

				<button
					className={css.button}
					type='submit'
					disabled={!isAnyFieldFilled}
				>
					Save
				</button>
			</div>
		</form>
	);
};

export default UserSettingsForm;
