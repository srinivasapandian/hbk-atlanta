export default function Img({ src, alt = '', className = '', style, loading = 'lazy', decoding = 'async', ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
}
