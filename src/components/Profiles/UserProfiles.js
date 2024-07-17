
export default function UserProfiles({session}) {
  return (
    <>
    <div className="mx-5 mb-5 h-full lg:w-[50vh] lg:h-[80vh] dark:bg-white rounded-xl ">
              <div className="flex justify-center">
                <div className="my-[10vh]">
                  <div className="w-96">
                    <img
                      src={session?.user.image.replace(/=s\d+/, "=s400")}
                      alt="profile-picture"
                      className="inline-block size-[200px] ml-[90px] mt-10 rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl mb-2 mt-2 font-bold text-white dark:text-black">
                      {session?.user.name}
                    </h4>
                    <h4 className="text-sm text-white dark:text-black mb-10 ">
                      {session?.user.email}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
