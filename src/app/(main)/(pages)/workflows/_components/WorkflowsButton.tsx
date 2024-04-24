"use client";

import CustomModal from "@/components/global/CustomModal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import { Workflowform } from "@/components/forms/Workflowform";
import { useBilling } from "@/providers/billing-provider";

type Props = {};

export function WorkflowsButton(props: Props) {
  const { setOpen, setClose } = useModal();
  const { credits } = useBilling();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <Workflowform />
      </CustomModal>
    );
  };

  return (
    <Button
      size={"icon"}
      {...(credits !== "0"
          ? {
              onClick: handleClick,
            }
          : {
              disabled: true,
            }
      )}
    >
      <Plus />
    </Button>
  );
}
