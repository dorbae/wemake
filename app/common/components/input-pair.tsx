// 문제: 타입스크립트에서 타입만 import할 때는 import type을 사용해야 하며, 일반 import는 번들 크기에 영향을 줄 수 있습니다.
// 수정: InputHTMLAttributes를 import type으로 변경하여 타입 전용 import로 최적화했습니다.
import type { InputHTMLAttributes } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function InputPair({
  label,
  description,
  textArea = false,
  ...rest
}: {
  label: string;
  description: string;
  textArea?: boolean;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  return (
    <div className="space-y-2 flex flex-col">
      <Label htmlFor={rest.id} className="flex flex-col gap-1">
        {label}
        <small className="text-muted-foreground">{description}</small>
      </Label>
      {textArea ? (
        <Textarea rows={4} className="resize-none" {...rest} />
      ) : (
        <Input {...rest} />
      )}
    </div>
  );
}