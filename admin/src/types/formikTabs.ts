import type { FormikErrors } from 'formik';

export type FormikCallback<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: FormikErrors<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: T;
  handleChange: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: React.ChangeEvent<any>): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <F = string | React.ChangeEvent<T>>(
      field: F
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ): F extends React.ChangeEvent<T>
      ? void
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (e: string | React.ChangeEvent<T>) => void;
  };
  isSubmitting: boolean;
};

export type FormikTabs<T> = Omit<FormikCallback<T>, 'error' | 'isSubmitting'>;
