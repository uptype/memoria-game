import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './alert-dialog';

type ConfirmAlertProps = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  onConfirm: () => void;
  onCancel?: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
};

export function ConfirmAlert({
  open,
  onOpenChange,
  onConfirm,
  onCancel,
  confirmLabel,
  cancelLabel,
  title,
  description,
}: ConfirmAlertProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description ? (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          ) : (
            <VisuallyHidden>
              <AlertDialogDescription>
                Select confirm to continue or cancel to return.
              </AlertDialogDescription>
            </VisuallyHidden>
          )}
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel type="button" onClick={onCancel} className="bg-violet-200">
            {cancelLabel || 'Cancel'}
          </AlertDialogCancel>
          <AlertDialogAction type="button" onClick={onConfirm}>
            {confirmLabel || 'Confirm'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
