import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldErrors } from "react-hook-form";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	error?: FieldErrors;
}
