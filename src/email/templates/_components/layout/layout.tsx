import { Body, Font, Head, Html, Link } from "@react-email/components";

import TailwindWrapper from "../tailwindWrapper";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body>
        <TailwindWrapper>
          <header className="flex items-center justify-center bg-[#E1D6D666] p-[2.5rem]">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4.5" r="4" fill="#F97316" />
              <circle cx="14" cy="4.5" r="4" fill="#F97316" />
              <circle cx="4" cy="14.5" r="4" fill="#F97316" />
              <circle cx="14" cy="14.5" r="4" fill="#F97316" />
            </svg>
            <h1 className="ml-4 text-[2rem] font-semibold text-[#121a26]">
              Boilerplate.
            </h1>
          </header>

          {children}

          <footer className="flex flex-col items-center bg-[#E1D6D666] py-14">
            <div className="flex items-center justify-center gap-[1.5rem]">
              <Link href="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3263 1.90332H21.6998L14.3297 10.3268L23 21.7893H16.2112L10.894 14.8374L4.80995 21.7893H1.43443L9.31743 12.7794L1 1.90332H7.96111L12.7674 8.25765L18.3263 1.90332ZM17.1423 19.7701H19.0116L6.94539 3.81645H4.93946L17.1423 19.7701Z"
                    fill="#5B5B5D"
                  />
                </svg>
              </Link>

              <Link href="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5894_2793)">
                    <path
                      d="M12 2.16033C15.2063 2.16033 15.5859 2.17439 16.8469 2.23064C18.0188 2.2822 18.6516 2.47908 19.0734 2.64314C19.6313 2.85876 20.0344 3.12126 20.4516 3.53845C20.8734 3.96033 21.1313 4.35876 21.3469 4.91658C21.5109 5.33845 21.7078 5.97595 21.7594 7.14314C21.8156 8.40876 21.8297 8.78845 21.8297 11.99C21.8297 15.1963 21.8156 15.576 21.7594 16.8369C21.7078 18.0088 21.5109 18.6416 21.3469 19.0635C21.1313 19.6213 20.8687 20.0244 20.4516 20.4416C20.0297 20.8635 19.6313 21.1213 19.0734 21.3369C18.6516 21.501 18.0141 21.6978 16.8469 21.7494C15.5813 21.8056 15.2016 21.8197 12 21.8197C8.79375 21.8197 8.41406 21.8056 7.15313 21.7494C5.98125 21.6978 5.34844 21.501 4.92656 21.3369C4.36875 21.1213 3.96563 20.8588 3.54844 20.4416C3.12656 20.0197 2.86875 19.6213 2.65313 19.0635C2.48906 18.6416 2.29219 18.0041 2.24063 16.8369C2.18438 15.5713 2.17031 15.1916 2.17031 11.99C2.17031 8.78376 2.18438 8.40408 2.24063 7.14314C2.29219 5.97126 2.48906 5.33845 2.65313 4.91658C2.86875 4.35876 3.13125 3.95564 3.54844 3.53845C3.97031 3.11658 4.36875 2.85876 4.92656 2.64314C5.34844 2.47908 5.98594 2.2822 7.15313 2.23064C8.41406 2.17439 8.79375 2.16033 12 2.16033ZM12 -0.000610352C8.74219 -0.000610352 8.33438 0.0134521 7.05469 0.0697021C5.77969 0.125952 4.90313 0.332202 4.14375 0.627515C3.35156 0.93689 2.68125 1.3447 2.01563 2.01501C1.34531 2.68064 0.9375 3.35095 0.628125 4.13845C0.332812 4.90251 0.126563 5.77439 0.0703125 7.04939C0.0140625 8.33376 0 8.74158 0 11.9994C0 15.2572 0.0140625 15.665 0.0703125 16.9447C0.126563 18.2197 0.332812 19.0963 0.628125 19.8556C0.9375 20.6478 1.34531 21.3181 2.01563 21.9838C2.68125 22.6494 3.35156 23.0619 4.13906 23.3666C4.90313 23.6619 5.775 23.8681 7.05 23.9244C8.32969 23.9806 8.7375 23.9947 11.9953 23.9947C15.2531 23.9947 15.6609 23.9806 16.9406 23.9244C18.2156 23.8681 19.0922 23.6619 19.8516 23.3666C20.6391 23.0619 21.3094 22.6494 21.975 21.9838C22.6406 21.3181 23.0531 20.6478 23.3578 19.8603C23.6531 19.0963 23.8594 18.2244 23.9156 16.9494C23.9719 15.6697 23.9859 15.2619 23.9859 12.0041C23.9859 8.74627 23.9719 8.33845 23.9156 7.05876C23.8594 5.78376 23.6531 4.9072 23.3578 4.14783C23.0625 3.35095 22.6547 2.68064 21.9844 2.01501C21.3188 1.34939 20.6484 0.93689 19.8609 0.632202C19.0969 0.33689 18.225 0.13064 16.95 0.0743897C15.6656 0.0134522 15.2578 -0.000610352 12 -0.000610352Z"
                      fill="#5B5B5D"
                    />
                    <path
                      d="M12 5.83533C8.59688 5.83533 5.83594 8.59626 5.83594 11.9994C5.83594 15.4025 8.59688 18.1635 12 18.1635C15.4031 18.1635 18.1641 15.4025 18.1641 11.9994C18.1641 8.59626 15.4031 5.83533 12 5.83533ZM12 15.9978C9.79219 15.9978 8.00156 14.2072 8.00156 11.9994C8.00156 9.79158 9.79219 8.00095 12 8.00095C14.2078 8.00095 15.9984 9.79158 15.9984 11.9994C15.9984 14.2072 14.2078 15.9978 12 15.9978Z"
                      fill="#5B5B5D"
                    />
                    <path
                      d="M19.8469 5.59153C19.8469 6.38841 19.2 7.03059 18.4078 7.03059C17.6109 7.03059 16.9688 6.38372 16.9688 5.59153C16.9688 4.79465 17.6156 4.15247 18.4078 4.15247C19.2 4.15247 19.8469 4.79934 19.8469 5.59153Z"
                      fill="#5B5B5D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5894_2793">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 -0.000610352)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link href="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5894_2797)">
                    <path
                      d="M17.0725 -0.000610352H13.0278V16.3472C13.0278 18.2951 11.4722 19.8951 9.53626 19.8951C7.60034 19.8951 6.04469 18.2951 6.04469 16.3472C6.04469 14.4342 7.56577 12.8689 9.43257 12.7994V8.69506C5.31872 8.76459 2 12.1385 2 16.3472C2 20.5907 5.38786 23.9994 9.57085 23.9994C13.7538 23.9994 17.1416 20.5559 17.1416 16.3472V7.96459C18.6627 9.07766 20.5295 9.73852 22.5 9.77332V5.66896C19.4579 5.56461 17.0725 3.06026 17.0725 -0.000610352Z"
                      fill="#5B5B5D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5894_2797">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 -0.000610352)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link href="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4375 5.65812C14.6456 6.54031 15.4378 7.1975 16.3838 7.1975C17.4881 7.1975 18.3834 6.30218 18.3834 5.19781C18.3834 4.09343 17.4881 3.19812 16.3838 3.19812C15.4181 3.19812 14.6128 3.8825 14.4253 4.79281C12.8081 4.96625 11.5453 6.33781 11.5453 8C11.5453 8.00375 11.5453 8.00656 11.5453 8.01031C9.78656 8.08437 8.18062 8.585 6.90562 9.37531C6.43219 9.00875 5.83781 8.79031 5.19281 8.79031C3.645 8.79031 2.39062 10.0447 2.39062 11.5925C2.39062 12.7156 3.05062 13.6831 4.00406 14.1303C4.09688 17.3834 7.64156 20 12.0019 20C16.3622 20 19.9116 17.3806 19.9997 14.1247C20.9456 13.6747 21.6 12.71 21.6 11.5934C21.6 10.0456 20.3456 8.79125 18.7978 8.79125C18.1556 8.79125 17.5641 9.00781 17.0916 9.37156C15.8053 8.57562 14.1816 8.075 12.405 8.00843C12.405 8.00562 12.405 8.00375 12.405 8.00093C12.405 6.81031 13.29 5.82218 14.4375 5.66V5.65812ZM6.79313 13.3709C6.84 12.3547 7.515 11.5747 8.29969 11.5747C9.08438 11.5747 9.68438 12.3987 9.6375 13.415C9.59063 14.4312 9.00469 14.8006 8.21906 14.8006C7.43344 14.8006 6.74625 14.3872 6.79313 13.3709ZM15.705 11.5747C16.4906 11.5747 17.1656 12.3547 17.2116 13.3709C17.2584 14.3872 16.5703 14.8006 15.7856 14.8006C15.0009 14.8006 14.4141 14.4322 14.3672 13.415C14.3203 12.3987 14.9194 11.5747 15.705 11.5747ZM14.7713 15.7222C14.9184 15.7372 15.0122 15.89 14.955 16.0269C14.4722 17.1809 13.3322 17.9919 12.0019 17.9919C10.6716 17.9919 9.5325 17.1809 9.04875 16.0269C8.99156 15.89 9.08531 15.7372 9.2325 15.7222C10.095 15.635 11.0278 15.5872 12.0019 15.5872C12.9759 15.5872 13.9078 15.635 14.7713 15.7222Z"
                    fill="#5B5B5D"
                  />
                </svg>
              </Link>

              <Link href="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5894_2801)">
                    <path
                      d="M22.2234 -0.000610352H1.77187C0.792187 -0.000610352 0 0.772827 0 1.72908V22.265C0 23.2213 0.792187 23.9994 1.77187 23.9994H22.2234C23.2031 23.9994 24 23.2213 24 22.2697V1.72908C24 0.772827 23.2031 -0.000610352 22.2234 -0.000610352ZM7.12031 20.451H3.55781V8.9947H7.12031V20.451ZM5.33906 7.43376C4.19531 7.43376 3.27188 6.51033 3.27188 5.37126C3.27188 4.2322 4.19531 3.30876 5.33906 3.30876C6.47813 3.30876 7.40156 4.2322 7.40156 5.37126C7.40156 6.50564 6.47813 7.43376 5.33906 7.43376ZM20.4516 20.451H16.8937V14.8822C16.8937 13.5556 16.8703 11.8447 15.0422 11.8447C13.1906 11.8447 12.9094 13.2931 12.9094 14.7885V20.451H9.35625V8.9947H12.7687V10.5603H12.8156C13.2891 9.66033 14.4516 8.70877 16.1813 8.70877C19.7859 8.70877 20.4516 11.0806 20.4516 14.165V20.451Z"
                      fill="#5B5B5D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5894_2801">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 -0.000610352)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>

            <div className="mt-12 px-[3rem]">
              <p className="my-12 text-[1.2rem] text-gray-600">
                Thank you for choosing Boilerplate.com Need help?{" "}
                <Link className="font-[500] text-black underline" href="/">
                  <strong>Contact our customer support</strong>
                </Link>
              </p>

              <p className="text-[1.2rem] text-gray-600">
                You are receiving this email because you signed up at
                Boilerplate.com. Want to change how you receive these emails?
              </p>

              <p className="mt-2 text-[1.2rem] text-gray-600">
                You can{" "}
                <Link className="font-[500] text-black" href="/">
                  <strong>update your preferences</strong>
                </Link>{" "}
                or{" "}
                <Link className="font-[500] text-black" href="/">
                  <strong>unsubscribe from this list.</strong>
                </Link>
              </p>
            </div>
          </footer>
        </TailwindWrapper>
      </Body>
    </Html>
  );
}
