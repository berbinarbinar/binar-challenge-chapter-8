export function SubHeading(props) {
  const { title } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>Ini bagian dari subheading</p>
      <span>ini span</span>
    </div>
  );
}
