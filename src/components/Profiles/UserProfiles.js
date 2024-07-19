export default function UserProfiles({ session }) {
  return (
    <>
      <div className="mx-5 mb-5 md:mb-0 h-[80vh] lg:w-[50vh] lg:h-[80vh] bg-[#2F3645] dark:bg-white rounded-xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)] ">
        <div className="flex justify-center">
          <div className="my-[10vh]">
            <div className="w-96">
              <img
                src={session?.user.image.replace(/=s\d+/, "=s400") || "/img/default-avatar.png"}
                alt="profile-picture"
                className="inline-block size-[200px] ml-[90px] mt-10 rounded-full shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]"
              />
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-black m-10 p-5 rounded-2xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)] ">
                <h4 className="text-xl  font-bold text-black dark:text-white">
                  {session?.user.name}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
