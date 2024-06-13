import {
  Select,
  Option,
} from "@material-tailwind/react";
function RekomendasiWisata() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full lg:w-[52vh] lg:h-[75vh] mx-5 p-10 mt-5 lg:mt-0 flex rounded-2xl ">
          <div className="bg-white shadow-2xl rounded-2xl w-full lg:w-[400px] lg:h-[300px] my-[150px]  p-5">
              <h1 className="text-center">Rencanakan!</h1>
            <div className="mt-5">
              <Select label="Kategori">
                <Option>Jakarta</Option>
                <Option>Yogyakarta</Option>
                <Option>Jawa Barat</Option>
                <Option>Jawa Tengah</Option>
                <Option>Jawa Timur</Option>
              </Select>
            </div>
            <div className="mt-5">
              <Select label="Daerah asal">
                <Option>Jakarta</Option>
                <Option>Yogyakarta</Option>
                <Option>Jawa Barat</Option>
                <Option>Jawa Tengah</Option>
                <Option>Jawa Timur</Option>
              </Select>
            </div>
            <div className="mt-5">
              <Select label="Daerah tujuan">
                <Option>Jakarta</Option>
                <Option>Yogyakarta</Option>
                <Option>Bandung</Option>
                <Option>Semarang</Option>
                <Option>Jawa Timur</Option>
              </Select>
            </div>
            <div className="mt-5 flex justify-end">
            <button type="button" className="bg-[#1EB47D] text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " >Rencanakan</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="lg:max-w-[100vh] lg:max-h-[75vh] lg:mt-0 overflow-auto">
          <div className="lg:w-[75vh] lg:h-[20vh] m-5 p-10 mb-5 mt-5 bg-[#0D8292] rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam
            perspiciatis aut accusamus omnis similique officiis possimus, ea
            distinctio voluptate illo, excepturi dolorem ab natus expedita
            reiciendis? Mollitia, molestias laudantium? Porro deserunt aut
            obcaecati tenetur minus similique ab beatae neque, vitae odit id
            animi voluptatem quisquam doloribus commodi nesciunt, ea quibusdam
            dolores praesentium aliquam hic rerum est enim eum. Dolorum.
          </div>
          <div className="lg:w-[75vh] lg:h-[20vh] m-5 p-10 mb-5 mt-5 bg-[#0D8292] rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam
            perspiciatis aut accusamus omnis similique officiis possimus, ea
            distinctio voluptate illo, excepturi dolorem ab natus expedita
            reiciendis? Mollitia, molestias laudantium? Porro deserunt aut
            obcaecati tenetur minus similique ab beatae neque, vitae odit id
            animi voluptatem quisquam doloribus commodi nesciunt, ea quibusdam
            dolores praesentium aliquam hic rerum est enim eum. Dolorum.
          </div>
          <div className="lg:w-[75vh] lg:h-[20vh] m-5 p-10 mb-5 mt-5 bg-[#0D8292] rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam
            perspiciatis aut accusamus omnis similique officiis possimus, ea
            distinctio voluptate illo, excepturi dolorem ab natus expedita
            reiciendis? Mollitia, molestias laudantium? Porro deserunt aut
            obcaecati tenetur minus similique ab beatae neque, vitae odit id
            animi voluptatem quisquam doloribus commodi nesciunt, ea quibusdam
            dolores praesentium aliquam hic rerum est enim eum. Dolorum.
          </div>
          <div className="lg:w-[75vh] lg:h-[20vh] m-5 p-10 mb-5 mt-5 bg-[#0D8292] rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam
            perspiciatis aut accusamus omnis similique officiis possimus, ea
            distinctio voluptate illo, excepturi dolorem ab natus expedita
            reiciendis? Mollitia, molestias laudantium? Porro deserunt aut
            obcaecati tenetur minus similique ab beatae neque, vitae odit id
            animi voluptatem quisquam doloribus commodi nesciunt, ea quibusdam
            dolores praesentium aliquam hic rerum est enim eum. Dolorum.
          </div>
          <div className="lg:w-[75vh] lg:h-[20vh] m-5 p-10 mb-5 mt-5 bg-[#0D8292] rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam
            perspiciatis aut accusamus omnis similique officiis possimus, ea
            distinctio voluptate illo, excepturi dolorem ab natus expedita
            reiciendis? Mollitia, molestias laudantium? Porro deserunt aut
            obcaecati tenetur minus similique ab beatae neque, vitae odit id
            animi voluptatem quisquam doloribus commodi nesciunt, ea quibusdam
            dolores praesentium aliquam hic rerum est enim eum. Dolorum.
          </div>

        </div>
      </div>
    </>
  );
}

export default RekomendasiWisata;
