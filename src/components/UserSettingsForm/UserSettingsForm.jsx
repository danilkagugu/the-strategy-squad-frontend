import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectUserData } from '../../redux/auth/selectors';
import { apiUpdateUser } from '../../redux/auth/operations';
import { getWaterNorm } from '../../helpers/getWaterNorm';
import css from './UserSettingsForm.module.css';
import sprite from '../../assets/icons.svg';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
	avatar: yup.mixed(),

	gender: yup
		.string()
		.oneOf(['Woman', 'Man'], 'Please select your gender')
		.required('Please select your gender'),

	name: yup
		.string()
		.min(3, 'Name must be greater than or equal to 3 characters long')
		.max(40, 'Name must be less than or equal to 40 characters long'),

	email: yup.string().email('Please enter a valid email address'),

	weight: yup
		.number()
		.nullable()
		.typeError('Weight must be a number')
		.min(0, 'Weight must be greater than or equal to 0')
		.max(200, 'Weight must be less than or equal to 200')
		.transform((value, originalValue) => {
			if (originalValue === '') return null;
			return value;
		}),

	timeActive: yup
		.number()
		.nullable()
		.typeError('Time must be a number')
		.min(0)
		.max(12, 'Time must be less than or equal to 12')
		.transform((value, originalValue) => {
			if (originalValue === '') return null;
			return value;
		}),

	waterNorm: yup
		.string()
		.required('This field is required')
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
		.test('max-value', 'Value must be less than or equal to 15', value => {
			if (value === undefined || value === null || value === '') return true;
			return parseFloat(value) <= 15;
		}),
});

const UserSettingsForm = ({ onClose, closeSettings }) => {
	const { t } = useTranslation();
	const user = useSelector(selectUserData);
	const dispatch = useDispatch();

	const [avatarUrl, setAvatarUrl] = useState(user.avatarURL);

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
		mode: 'onChange',
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
		closeSettings(false);
		data.waterNorm = data.waterNorm * 1000;

		const formData = new FormData();

		for (const key in data) {
			if (key === 'avatar') {
				if (data[key]) {
					formData.append(key, data[key]);
				}
				continue;
			}
			if (data[key] === '' || data[key] === undefined || data[key] === null) {
				continue;
			}
			formData.append(key, data[key]);
		}

		try {
			await dispatch(apiUpdateUser(formData)).unwrap();

			onClose();
			toast.success('Your data successfully updated');
		} catch (error) {
			if (
				error.response &&
				error.response.data &&
				error.response.data.message
			) {
				toast.error(`Failed to update data: ${error.response.data.message}`);
			} else {
				toast.error('Failed to update data. Please try again.');
			}
		}
	};

	const { gender, weight, timeActive } = watch();

	const recommendedWaterNorm = getWaterNorm(gender, weight, timeActive);

	return (
		<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={css.avatarContainer}>
				<label className={css.avatarUpload}>
					<img src={avatarUrl} alt='Avatar' className={css.avatar} />
					<input
						type='file'
						accept='image/*'
						{...register('avatar')}
						onChange={handleAvatarUpload}
						className={css.avatarInput}
					/>
				</label>
				<label className={css.avatarUpload}>
					<svg className={css.uploadIcon}>
						<use href={`${sprite}#icon-upload-avatar`}></use>
					</svg>
					{t('add_photo')}
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
					<label className={css.optionTitle}>{t('gender_choose')}</label>
					<div className={css.genderOptions}>
						<label className={css.radioBox}>
							<input
								className={css.radio}
								type='radio'
								name='gender'
								value='Woman'
								{...register('gender')}
							/>
							{t('woman')}
						</label>
						<label className={css.radioBox}>
							<input
								className={css.radio}
								type='radio'
								name='gender'
								value='Man'
								{...register('gender')}
							/>
							{t('man')}
						</label>
						{errors.gender && (
							<span className={css.error}>{errors.gender.message}</span>
						)}
					</div>
				</div>

				<div className={css.userInfo}>
					<div className={css.formGroup}>
						<div className={css.fieldsGroup}>
							<div className={css.inputGroup}>
								<label className={css.optionTitle}>{t('your_name')}</label>
								<input
									className={css.textInput}
									type='text'
									{...register('name')}
								/>
								{errors.name && (
									<span className={css.error}>{errors.name.message}</span>
								)}
							</div>

							<div className={css.inputGroup}>
								<label className={css.optionTitle}>{t('email')}</label>
								<input
									className={css.textInput}
									type='email'
									{...register('email')}
								/>
								{errors.email && (
									<span className={css.error}>{errors.email.message}</span>
								)}
							</div>
						</div>
						<div className={css.fieldsGroup}>
							<label className={css.optionTitle}>{t('daily_norm')}</label>
							<ul className={css.formulaGroup}>
								<li className={css.formulaContainer}>
									<p className={css.formulaName}>{t('for_woman')}:</p>
									<p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
								</li>
								<li className={css.formulaContainer}>
									<p className={css.formulaName}>{t('for_man')}:</p>
									<p className={css.formula}>V=(M*0,04) + (T*0,6)</p>
								</li>
							</ul>
							<div className={css.normaInfo}>
								<p className={css.normaInfoText}>
									<span className={css.formula}>*</span>
									{t('formula_text')}
								</p>
							</div>
							<p className={css.note}>
								<span className={css.noteSpan}>!</span>
								{t('active_time')}
							</p>
						</div>
					</div>

					<div className={css.formGroup}>
						<div className={css.fieldsGroup}>
							<div className={css.inputGroup}>
								<label className={css.activities}>
									{t('weight_in_kilograms')}:
								</label>
								<input
									className={css.textInput}
									type='text'
									{...register('weight')}
								/>
								{errors.weight && (
									<span className={css.error}>{errors.weight.message}</span>
								)}
							</div>
							<div className={css.inputGroup}>
								<label className={css.activities}>
									{t('time_of_participation')}:
								</label>
								<input
									className={css.textInput}
									type='text'
									{...register('timeActive')}
								/>
								{errors.timeActive && (
									<span className={css.error}>{errors.timeActive.message}</span>
								)}
							</div>
						</div>
						<div className={css.fieldsGroup}>
							<div className={css.requiredWaterGroup}>
								<label>{t('required_amount')}:</label>
								<p className={css.formula}>{`${recommendedWaterNorm} ${t(
									'l'
								)}`}</p>
							</div>

							<div className={css.inputGroup}>
								<label className={css.optionTitle}>{t('water_much')}:</label>
								<input
									className={css.textInput}
									type='text'
									{...register('waterNorm')}
								/>
								{errors.waterNorm && (
									<span className={css.error}>{errors.waterNorm.message}</span>
								)}
							</div>
						</div>
					</div>
				</div>

				<button className={css.button} type='submit'>
					{t('save')}
				</button>
			</div>
		</form>
	);
};

export default UserSettingsForm;
