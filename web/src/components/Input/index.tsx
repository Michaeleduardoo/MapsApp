import { Cashie, InputSty, LabelSty } from "./styles";

interface Inputprops {
  label: string;
  name: string;
  value: string;
  onChange: Function;
}

export default function Input(props: Inputprops) {
  return (
    <Cashie>
      <LabelSty>{props.label}</LabelSty>
      <InputSty
        required
        name={props.name}
        value={props.value}
        onChange={(e) => {
          props.onChange((prev: any) => ({
            ...prev,
            [props.name]: e.target.value,
          }));
        }}
      />
    </Cashie>
  );
}

//28:00
