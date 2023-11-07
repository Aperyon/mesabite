import Icon from "./Icon";

export default function Header() {
  return (
    <div className="bg-yellow-500 flex justify-between px-4 py-4 border-b border-b-red-800">
      <div>
        <Icon icon="bars" />
      </div>
      <div>
        <h1 className="font-bold text-xl">MesaBite</h1>
      </div>
      <div>
        🇺🇸 <Icon icon="chevron-down" />
      </div>
    </div>
  );
}
