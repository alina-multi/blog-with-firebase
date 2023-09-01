export function Time ({time}) {
    return (
        <div className="flex gap-3 items-center text-sm text-zinc-500 ">
        <time>
          {time?.toDate().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
    )
}