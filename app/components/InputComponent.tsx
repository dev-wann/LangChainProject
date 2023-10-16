interface Props {
  label: string;
  placeholder?: string;
  updateCallback?: (val: string) => void;
}

export default function InputComponent(props: Props) {
  return (
    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
      <div className="flex items-center bg-gray-100 rounded rounded-r-none border border-r-0 border-gray-200 px-3 whitespace-no-wrap text-gray-dark text-sm w-20">
        <span className="font-bold text-center leading-normal">
          {props.label}
        </span>
      </div>
      <input
        type="text"
        className="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
        placeholder={props.placeholder ? props.placeholder : ''}
        onChange={(e) => {
          if (props.updateCallback) props.updateCallback(e.target.value);
        }}
      />
    </div>
  );
}
