export type TiptapEditorProps = {
  description?: {
    id: string;
    defaultMessage: string;
    values: object;
  };
  disabled?: boolean;
  error?: string;
  intlLabel: {
    id: string;
    defaultMessage: string;
    values: object;
  };
  labelAction?: JSX.Element;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void; // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: {
    id: string;
    defaultMessage: string;
    values: object;
  };
  required?: boolean;
  value: string;
};
