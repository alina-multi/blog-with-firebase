export default function Code() {
  return (
    <div className="px-6 pb-14 pt-6">
      <code className="text-sm font-semibold leading-6 text-white">
        <span className="text-sky-400">import</span> React, &#123; useState
        &#125; <span className="text-sky-400">from</span> "react";
      </code>

      <div>
        <div className=" flex items-center  gap-6 ">
          <code className="text-sm font-semibold leading-6 text-white">
            <span className="text-sky-400">import</span> Posts{" "}
            <span className="text-sky-400">from</span>{" "}
            "../components/Post/Posts";
          </code>
        </div>
      </div>

     

            <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                <span className="text-sky-400">import</span> &#123; AuthContext &#125;{" "}
                <span className="text-sky-400">from</span> "../store/AuthContext";
            </code>

                </div>

                <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                <span className="text-sky-400">import</span> PopoverMenu{" "}
                <span className="text-sky-400">from</span>{" "}
                "../components/Popover";
            </code>
            </div>

         
            <div>
                   {/* make this as code */}
            {/* function Example() {
	const [enabled, setEnabled] = useState(true)

	return (
		<form action="/notification-settings" method="post">
			<Switch checked={enabled} onChange={setEnabled} name="notifications">
                Notifications
			</Switch>
			<button>Submit</button>
		</form>
	)
}
            </div> */}

            <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                <span className="text-sky-400">function</span> Example() &#123;
            </code>

            </div>

            <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                <span className="text-sky-400">const</span> [enabled, setEnabled] = useState(true)
            </code>

            </div>

            <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                <span className="text-sky-400">return</span> (
            </code>

            </div>
           <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                <span className="text-sky-400">&lt;form</span> action="/notification-settings" method="post"&gt;
            </code>
            </div>

            <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                &lt;Switch checked=&#123;enabled&#125; onChange=&#123;setEnabled&#125; name="notifications"&gt;
            </code>
            </div>

            <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                Notifications
            </code>
                    
                    </div>

                    <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                &lt;/Switch&gt;
            </code>
                    
                    </div>

                    <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                &lt;button&gt;Submit&lt;/button&gt;
            </code>

            </div>

            <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                &lt;/form&gt;
            </code>
            </div>

            <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                )
            </code>

            
            </div>

            <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                {"}"}
            </code>

            </div>
            <div className=" flex items-center  gap-6 ">
            <code className="text-sm font-semibold leading-6 text-white">
                export default Example
            </code>

            </div>
          



            </div>
    </div>
  );
}
