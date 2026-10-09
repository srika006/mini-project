import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const VARIANTS = {
  primary: 'bg-gradient-to-r from-[#0d7554] via-[#0f8a62] to-[#2bb673] text-white hover:from-[#0a684b] hover:via-[#0d7b58] hover:to-[#25a96a] shadow-[0_12px_30px_rgba(13,117,84,0.25)]',
  secondary: 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50',
  outline: 'border border-[#0d7554] text-[#0d7554] hover:bg-[#edfaf4]',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  ghost: 'text-slate-700 hover:bg-[#edfaf4]',
  light: 'bg-white text-[#0a4b3a] hover:bg-[#edfaf4] shadow-sm',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

/** Button that becomes disabled and shows a spinner while `loading`. Pass `to` to render a link. */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  to,
  className = '',
  icon: Icon,
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const content = (
    <>
      {loading ? <LoadingSpinner size="sm" /> : Icon && <Icon size={size === 'sm' ? 16 : 18} aria-hidden="true" />}
      {children}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} disabled={disabled || loading} aria-busy={loading} {...props}>
      {content}
    </button>
  );
}
