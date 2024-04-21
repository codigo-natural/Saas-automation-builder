import { Workflow } from "./Workflow";

type Props = {};

export const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow 
          description="Creating a test workflow"
          id="87yt625"
          name="Automation Workflow"
          publish={false}
        />
      </section>
    </div>
  );
};
