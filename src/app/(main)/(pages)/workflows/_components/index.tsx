import { onGetWorkflows } from "../_actions/workflow-connections";
import { MoreCredits } from "./MoreCredits";
import { Workflow } from "./Workflow";

type Props = {};

export const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows();
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <MoreCredits />
        {workflows?.length ? (
          workflows.map((flow) => <Workflow key={flow.id} {...flow} />)
        ) : (
          <p className="mt-28 text-muted-foreground flex items-center justify-center">No workflows found</p>
        )}
      </section>
    </div>
  );
};
