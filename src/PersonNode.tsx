import React, { memo } from "react";
import { Handle, Position, NodeProps, Node } from "@xyflow/react";
import { Helmet } from "react-helmet-async";

type PersonNode = Node<{
  data: {
    name: string;
    birthDate?: string;
    marriages: string[];
  };
}>;

function PersonNode({ data }: NodeProps<PersonNode>) {
  return (
    <div>
      <Helmet>
        <script type="application/javascript">
          {`          
      (function(d) {
        var config = {
          kitId: 'ocy7kuz',
          scriptTimeout: 3000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
        `}
        </script>
      </Helmet>
      <div className="">
        <div className="flex font-nodes [writing-mode:vertical-rl]">{data.name}</div>

        <Handle id="sLeft" type="source" position={Position.Left} className="" />
        <Handle id="tLeft" type="target" position={Position.Left} className="" />
        <Handle id="sRight" type="source" position={Position.Right} className="" />
        <Handle id="tRight" type="target" position={Position.Right} className="" />
      </div>
    </div>
  );
}

export default memo(CustomNode);
