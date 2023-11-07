export default function Icon({ icon }: { icon: string }) {
  return <i className={`fa fa-${icon}`} />;
}
