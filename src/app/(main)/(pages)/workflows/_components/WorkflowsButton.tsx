"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";

type Props = {};

export function WorkflowsButton(props: Props) {
  const { setOpen, setClose } = useModal()
  
  const handleClick = () => {
    // setOpen(
    //   <CustomModal
    //     title="Create a workflow Automation"
    //     subheading="Workflows are a powerfull that help you automate tasks."
    //   >
    //     <Workflowform />
    //   </CustomModal>
    // );
  };

  return (
    <Button size={"icon"} onClick={handleClick}>
      <Plus />
    </Button>
  );
}
