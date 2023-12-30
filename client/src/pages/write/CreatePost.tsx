import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../../config/config";
import { UseBlogWebAppContext } from "../../context/BlogAppContext";
import { handleCreateImageUpload } from "../../utils";

const CreatePost = () => {
  const { statusTextForSignUp, accessToken, user, fetchData } =
    UseBlogWebAppContext();
  const userId = user && user.id;
  const [file, setFile] = useState<File | null>();
  const [post, setPost] = useState({
    userId: userId,
    title: "",
    description: "",
    image: "",
    isArchived: false,
  });
  const navigate = useNavigate();
  // Creating Post
  const handleCreatingBlogPost = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ytmo583o");
      const imageUrl = await handleCreateImageUpload(formData);
      post.image = imageUrl;
      await axios.post(`${config.apiUrl}/write`, post);
    }
    fetchData();
    navigate("/");
  };
  return (
    <div>
      {statusTextForSignUp || (accessToken && user?.isArchived === false) ? (
        <div
          className="pt-[1.5rem] md:pt-[2.3rem] lg:pt-[2.5rem] pb-[3rem] mx-[1rem]
     md:mx-[3rem] lg:mx-[7.5rem] xl:mx-[8.5rem] 2xl:mx-[11rem] 3xl:mx-[12.5rem]"
        >
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="create post img"
              title="create post img"
              className="mb-3 rounded-md object-cover w-auto h-auto"
            />
          )}
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-2 items-center">
              <label
                htmlFor="file"
                className="h-[25px] w-[25px] md:h-[27px] md:w-[27px] 2xl:h-[28px] 2xl:w-[28px] rounded-[50%] border-solid flex justify-center items-center
             border-2 border-[#535252] cursor-pointer"
              >
                <i className="ri-add-fill text-[18px] text-[#535252]"></i>
              </label>
              <input
                type="file"
                accept="image/*"
                id="file"
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setFile((e.target as HTMLInputElement)?.files?.[0])
                }
                className="hidden"
              />
              <input
                type="text"
                id="name"
                placeholder="Title"
                className="w-[90%] md:w-full focus:outline-none  text-dark-blue 
            text-[19px] xl:text-[20px]  font-navItemsForfont
            tracking-wide py-[0.5rem] pl-[0.5rem] "
                autoFocus={true}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
              />
            </div>
            <div>
              <textarea
                name="Tell your story"
                id=""
                placeholder="Tell your story"
                className=" w-[100%] py-[0.5rem] pl-[0.5rem] focus:outline-none
             leading-6 text-[15px] xl:text-[16px] h-[200px] "
                onChange={(e) =>
                  setPost({ ...post, description: e.target.value })
                }
              ></textarea>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                className="py-[10px] px-[17px] bg-pure-orange text-dark-blue font-bold cursor-pointer rounded-lg
             text-[0.899rem] xl:text-[0.998rem] "
                onClick={handleCreatingBlogPost}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[80vh] flex justify-center items-center">
          <h1 className="text-2xl font-bold text-center text-dark-blue">
            Please Create An Account.
          </h1>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
