export default function UserProfile({params}: any){
  return(
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Profile</h1>
      <hr />
      <p className="text-4xl flex gap-3 flex-wrap justify-center">
        Profile Page
        <span className="p-2 ml-2 rounded bg-orange-500 text-black">{params.id}</span>
      </p>
    </div>
  )
}