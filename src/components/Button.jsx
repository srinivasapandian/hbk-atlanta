export default function Button({ as: Tag = 'button', type = 'button', className = '', children, ...props }) {
  if (Tag === 'button') {
    return <button type={type} className={className} {...props}>{children}</button>;
  }
  return <Tag className={className} {...props}>{children}</Tag>;
}
