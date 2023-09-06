import Link from "next/link"
export default function Error() {
    return (
        <div className="w-screen  flex items-center justify-center flex-col h-screen ">
            <h1 className="text-2xl">404, verloren im Internet.</h1>
            <Link className="underline" href={"/"}>Hier kommst du aber wieder zurück</Link>
        </div>
    )
}