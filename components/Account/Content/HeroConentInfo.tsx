"use client";

import React, { useEffect, useRef, useState } from "react";
import image_background from "./../../../public/images/Rectangle 3_image-background.png";
import pen_change from "./../../../public/images/Pen.png";
import user_image from "./../../../public/images/user.svg";
import upload_image from "./../../../public/images/Filled=True_upload.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import supabase from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import ModalConfirmLoadImage from "./ModalConfirmLoadImage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";
import { User } from "@/interfaces/interface";
import { Session as NextAuthSession } from "next-auth";
import Loader from "@/ui/Loader/Loader";

interface ServerInt {
  serverComponent: any;
  serverComponentEmail: any;
  userSession: any;
  session: NextAuthSession | null;
}

interface FormInt {
  image: string;
  backgroundImage: string;
}

const HeroConentInfo = ({ serverComponentEmail, userSession }: ServerInt) => {
  const router = useRouter();

  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<FormInt>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormInt> = async (data) => {
    const res = await fetch("/api/TestApi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        backgroundImage: data.backgroundImage,
        image: data.image,
      }),
    });
    if (res.ok) {
      console.log("good");
      router.refresh();
    } else {
      console.log("badd");
    }
    console.log(data);
  };

  const [stateBackground, setStateBackground] = useState<string>("");

  const handleClickChangeBackground = async () => {
    const resBackgorund = await fetch("/api/BackgroundChange", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: stateBackground }),
    });
    if (resBackgorund.ok) {
      console.log("good");
    } else {
      console.log("badd");
    }
  };

  const handleOnchangeInput = (e: any) => {
    setStateBackground(e.target.value);
  };

  const handleClickProtect = () => {
    if (typeof userSession?.image === undefined) {
      console.log("0");
    } else if (typeof userSession?.image !== undefined) {
      console.log("1");
      console.log(userSession?.image!);
    }
  };

  // // console.log(stateBackground)
  console.log(typeof userSession?.image);
  console.log(typeof userSession?.backgroundImage);
  // console.log(typeof session?.user.backgroundImage)
  // console.log(session?.user.backgroundImage)

  const fileInputRef = useRef<any>(null);
  const fileBackgrount = useRef<any>(null);

  const [file, setFile] = useState<File | null>(null);
  const [stateModal, setSDtateModal] = useState<boolean>(false);
  const [stateName, setStateName] = useState<string>("");

  const [backgroundFile, setBackgroundFile] = useState<File | null>(null);
  const [stateModalBackground, setStateModalBackground] =
    useState<boolean>(false);
  const [stateNameBackground, setStateNameBackground] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(file?.name);
      setSDtateModal(true);
      setStateName(e.target.files[0].name);
      console.log("file: " + e.target.files[0].name);
    }
  };

  const handleFileChangeBackground = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      setBackgroundFile(e.target.files[0]);
      console.log(backgroundFile?.name);
      setStateModalBackground(true);
      setStateNameBackground(e.target.files[0].name);
      console.log("file: " + e.target.files[0].name);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleButtonClickBackground = () => {
    fileBackgrount.current.click();
  };

  const handleSubmitFile = async () => {
    // e.preventDefault();

    if (!file) return;

    const filename = `${uuidv4()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("second_bucket")
      .upload(filename, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Error uploading file:", error);
      return;
    }

    const publicUrl = supabase.storage
      .from("second_bucket")
      .getPublicUrl(filename).data.publicUrl;

    const res = await fetch("/api/UploadImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: publicUrl,
      }),
    });

    if (res.ok) {
      console.log("Image URL saved to database successfully");
    } else {
      console.error("Error saving image URL to database");
    }
  };

  const handleSubmitFilebackground = async () => {
    if (!backgroundFile) return;

    const filename = `${uuidv4()}-${backgroundFile.name}`;

    const { data, error } = await supabase.storage
      .from("second_bucket")
      .upload(filename, backgroundFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Error uploading file:", error);
      return;
    }

    const publicUrl = supabase.storage
      .from("second_bucket")
      .getPublicUrl(filename).data.publicUrl;

    const res = await fetch("/api/UploadBackgroundImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        backgroundImage: publicUrl,
      }),
    });

    if (res.ok) {
      console.log("Image URL saved to database successfully");
    } else {
      console.error("Error saving image URL to database");
    }
  };

  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: handleSubmitFile,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["main_image_user"] });
    },
  });

  const mutationBackground = useMutation({
    mutationFn: handleSubmitFilebackground,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["main_background_image_user"] });
    },
  });

  const handleSubmitQuery = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  const handleSubmitQueryBackground = (e: React.FormEvent) => {
    e.preventDefault();
    mutationBackground.mutate();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["main_image_user"],
    queryFn: () => fetch("/api/GetUserMainImage").then((res) => res.json()),
  });

  const res = useQuery({
    queryKey: ["main_background_image_user"],
    queryFn: () => fetch("/api/GetUserMainImage").then((res) => res.json()),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error...</div>;
  }

  console.log(data?.res.image);
  console.log(res.data?.res.backgroundImage);

  return (
    <>
      <form
        onSubmit={stateModal ? handleSubmitQuery : handleSubmitQueryBackground}
      >
        {stateModal ? (
          <ModalConfirmLoadImage
            setSDtateModal={setSDtateModal}
            stateName={stateName}
          />
        ) : null}
        <button type="submit">SUBMIT</button>
        {/* <button type='submit'>UPLOAD</button>
      <input type="text" {...register("backgroundImage", {
                        required: 'Required field',
                      })} />
      {/* {
        image === null ? <Image src={image_background} alt='background_image' className='board-user__change-background-image' fill={true}/> : <Image width={30} height={30} className='image__change' src={image} alt="" />
      } */}
        {/* <button type='submit'>Protect</button>  */}
        {typeof res.data?.res.backgroundImage !== "string" ? (
          <Image
            src={image_background}
            alt="background_image"
            className="board-user__change-background-image"
            fill={true}
          />
        ) : (
          <Image
            src={res.data?.res.backgroundImage}
            alt="background_image"
            className="board-user__change-background-image"
            fill={true}
          />
        )}
        <div className="board-user__block-information">
          <div className="board-user__block-uut">
            <div className="board-user__content-user">
              <div>
                <div className="board-user__images-block">
                  {/* <input type="text" {...register("image", {
                        required: 'Required field',
                      })}/>
                      <button type='button'>submit</button> */}
                  {typeof data?.res.image !== "string" ? (
                    <Image
                      src={user_image}
                      alt="image_user"
                      className="board-user__image-min"
                    />
                  ) : (
                    <Image
                      width={20}
                      height={20}
                      src={data?.res.image}
                      alt="image_user"
                      className="board-user__image-min"
                    />
                  )}
                  <button
                    type="button"
                    className="board-user__btn-change-user-image"
                    onClick={handleButtonClick}
                  >
                    <Image
                      src={pen_change}
                      alt="pen_image_change"
                      className="board-user__pen-image"
                    />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <p className="board-user__full-name">
                {userSession?.userName.slice(0, 1).toUpperCase() +
                  userSession?.userName.slice(1).toLowerCase() +
                  " " +
                  userSession?.lastName.slice(0, 1).toUpperCase() +
                  userSession?.lastName.slice(1).toLowerCase() +
                  "."}
              </p>
              <p className="board-user__email-adress">{serverComponentEmail}</p>
            </div>
            <div className="board-user__upload-new-font">
              <button
                type="button"
                onClick={handleButtonClickBackground}
                className="board-user__btn-upload"
              >
                <Image
                  src={upload_image}
                  alt="image_upload-new-font"
                  className="board-user__image-upload"
                />
                <p className="board-user__description-upload-btn">
                  Upload new cover
                </p>
              </button>
              <input
                type="file"
                ref={fileBackgrount}
                style={{ display: "none" }}
                onChange={handleFileChangeBackground}
              />
              {/* <div className={ image === null ? 'account__block-svg-change-photo' : 'account__block-svg-change-photo-active'}> 
                          {
                            image === null ? <Image width={30} height={30} className='image__change' src={user_image} alt="" /> : <Image width={30} height={30} className='image__change' src={image} alt="" />
                          } */}
              {/* </div> */}
              {/* <input onChange={onImageChange} type="file" id="file-input" name="file-input" />
                          <label id="file-input-label" htmlFor="file-input" className='account__button-save-change'>Change</label> */}
            </div>
          </div>
        </div>
      </form>
      {/* <button type='submit' onSubmit={handleSubmitFile}>SUBMIT</button> */}
    </>
  );
};

export default HeroConentInfo;

// "use client"

// import React, { useEffect, useState } from 'react'
// import image_background from './../../../public/images/Rectangle 3_image-background.png'
// import pen_change from './../../../public/images/Pen.png'
// import user_image from './../../../public/images/user.svg'
// import upload_image from './../../../public/images/Filled=True_upload.png'
// import Image from 'next/image'
// import ImageUserComponent from './ImageUserComponent'
// import { SubmitHandler, useForm } from 'react-hook-form'

// interface ServerInt {
//   serverComponent: any
//   serverComponentEmail: any
//   user: string | undefined
// }

// interface FormInt {
//   image: string
// }

// const HeroConentInfo = ({serverComponent, serverComponentEmail, user}: ServerInt) => {

//         const [image, setImage] = useState ( () => {
//         const savedItem = typeof window !== 'undefined' && localStorage.getItem("userImage");
//        const parsedItem = JSON.parse(savedItem as string);
//        return parsedItem || null;
//        });

//        useEffect(() => {
//         typeof window !== 'undefined' && localStorage.setItem("userImage",JSON.stringify(image))
//       });

//       const onImageChange = (event: any) => {
//         if (event.target.files && event.target.files[0]) {
//           setImage(URL.createObjectURL(event.target.files[0]));
//         }
//       }

//       const {
//         register,
//         formState: { errors, isValid, isSubmitting},
//         handleSubmit,
//         reset
//       } = useForm<FormInt>({
//         mode:'onBlur'
//       })

//       const onSubmit: SubmitHandler<FormInt> = async (data) => {
//         const res = await fetch('/api/TestApi', {
//           method: 'POST',
//               headers: {
//               'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({image: data.image})
//         })
//         if (res.ok) {
//           console.log('good')
//         } else {
//           console.log('badd')
//         }
//         console.log(data)
//       }

//   return (
//     <>
//       {/* {
//         image === null ? <Image src={image_background} alt='background_image' className='board-user__change-background-image' fill={true}/> : <Image width={30} height={30} className='image__change' src={image} alt="" />
//       } */}
//       <Image src={image_background} alt='background_image' className='board-user__change-background-image' fill={true}/>
//         <div className="board-user__block-information">
//             <div className='board-user__block-uut'>
//                 <div className="board-user__content-user">
//                     <form onSubmit={handleSubmit(onSubmit)} className="board-user__images-block">
//                       {
//                         image === null ? <Image src={user as string} width={50} height={50} alt='image_user' className={image === null ? 'board-user__image-min' : "image__change"}/> : <ImageUserComponent width={160} height={160} image={image} />
//                       }
//                         <button type='button' className='board-user__btn-change-user-image'>
//                           <input type="file" id="file-input" name="file-input" />
//                           <label id="file-input-label" htmlFor="file-input">
//                           <Image src={pen_change} alt='pen_image_change' className='board-user__pen-image' />
//                           </label>
//                         </button>
//                         <input type="text" {...    register("image", {
//               required: 'Required field',
//             })}/>
//             <button type='submit'>submit</button>
//                     </form>
//                     <p className='board-user__full-name'>{serverComponent}</p>
//                     <p className='board-user__email-adress'>{serverComponentEmail}</p>
//                 </div>
//                 <div className="board-user__upload-new-font">
//                     <button className="board-user__btn-upload">
//                         <Image src={upload_image} alt='image_upload-new-font' className='board-user__image-upload' />
//                         <p className='board-user__description-upload-btn'>Upload new cover</p>
//                     </button>
//                                               {/* <div className={ image === null ? 'account__block-svg-change-photo' : 'account__block-svg-change-photo-active'}>
//                           {
//                             image === null ? <Image width={30} height={30} className='image__change' src={user_image} alt="" /> : <Image width={30} height={30} className='image__change' src={image} alt="" />
//                           } */}
//                           {/* </div> */}
//                           {/* <input onChange={onImageChange} type="file" id="file-input" name="file-input" />
//                           <label id="file-input-label" htmlFor="file-input" className='account__button-save-change'>Change</label> */}
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default HeroConentInfo
