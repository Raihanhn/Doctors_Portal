"use client";
import React from "react";
import { Text, Img, GoogleMap, Heading, Input, RatingBar, Button } from "../../components";
import Link from "next/link";

const data = [
  { covid19Test: "Covid-19 Test", search: "img_search.svg" },
  { covid19Test: "Heart Lungs", search: "img_vector.svg" },
  { covid19Test: "Suppliment", search: "img_vector_blue_800.svg" },
  { covid19Test: "Mental Health", search: "img_settings.svg" },
];

export default function MedicalLandingPageDesignPage() {
  return (
    <>
      {/* header section */}
      <div className="w-full bg-white-A700">
        {/* services overview section */}
        <div className="flex flex-col items-center gap-[150px] md:gap-28 sm:gap-[75px]">
          {/* statistics section */}
          <div className="relative h-[1407px] self-stretch">
            {/* consultation section */}
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-end">
              <div className="flex flex-col items-center gap-[336px] self-stretch bg-blue-50 py-[45px] md:gap-[252px] md:py-5 sm:gap-[168px]">
                <header className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                  <Heading size="md" as="h2" className="!text-blue_gray-900_01">
                    <span className="text-gray-900_01">E-</span>
                    <span className="text-blue-800">sheba</span>
                  </Heading>
                  <div className="flex w-[65%] items-center justify-between gap-5 md:w-full md:flex-col">
                    <div className="mb-2 flex w-[46%] flex-col items-start self-end md:w-full">
                      <ul className="flex flex-wrap gap-7">
                        <li>
                          <Link href="#" className="self-start">
                            <Text size="md" as="p" className="!font-medium !text-blue-800">
                              Home
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="cursor-pointer self-start">
                            <Text
                              size="md"
                              as="p"
                              className="!text-blue_gray-900_03 hover:font-medium hover:!text-blue-800"
                            >
                              About
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="cursor-pointer self-end">
                            <Text
                              size="md"
                              as="p"
                              className="!text-blue_gray-900_03 hover:font-medium hover:!text-blue-800"
                            >
                              Application
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="cursor-pointer self-end">
                            <Text
                              size="md"
                              as="p"
                              className="!text-blue_gray-900_03 hover:font-medium hover:!text-blue-800"
                            >
                              History
                            </Text>
                          </Link>
                        </li>
                      </ul>
                      <div className="h-[2px] w-[14%] bg-blue-800" />
                    </div>
                    <div className="flex gap-[19px]">
                      <Button variant="outline" shape="round" className="min-w-[122px] font-semibold sm:px-5">
                        Log in
                      </Button>
                      <Button shape="round" className="min-w-[122px] font-semibold sm:px-5">
                        Sign up
                      </Button>
                    </div>
                  </div>
                </header>
                <div className="container-xs mb-[323px] md:p-5">
                  <Text as="p" className="!text-blue_gray-900_02">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                  </Text>
                </div>
              </div>

              {/* specialists section */}
              <div className="relative mt-[-488px] flex w-[92%] flex-col md:w-full md:p-5">
                <div className="flex items-center md:flex-col">
                  <Heading size="2xl" as="h1" className="relative z-[1] mb-[66px] self-end !text-blue_gray-900_01">
                    Our Consulting Specialists
                  </Heading>
                  <div className="relative ml-[-73px] h-[800px] flex-1 rotate-[180deg] rounded-[400px] bg-blue-200 md:ml-0 md:self-stretch" />
                </div>
                <div className="container-xs relative mt-[-32px] flex gap-5 md:flex-col">
                  {data.map((d, index) => (
                    <div
                      key={"group24" + index}
                      className="flex w-full flex-col items-start justify-center rounded-[20px] border border-solid border-gray-900_01 p-[15px]"
                    >
                      <div className="ml-3.5 mt-[25px] flex flex-col items-center justify-center rounded-[46px] bg-blue-50_01 p-[23px] md:ml-0 sm:p-5">
                        <Img src={d.search} width={45} height={45} alt="search" className="h-[45px] w-[45px]" />
                      </div>
                      <Heading as="h2" className="ml-3.5 mt-3 !text-gray-900_01 md:ml-0">
                        {d.covid19Test}
                      </Heading>
                      <Text as="p" className="mb-6 mt-1.5 w-[95%] self-end !text-blue_gray-900 md:w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* find doctor section */}
            <div className="absolute right-[0.28px] top-[5%] m-auto flex w-[92%] items-start justify-end md:relative md:flex-col">
              <Img
                src="img_vector_5.svg"
                width={278}
                height={30}
                alt="Vector 5"
                className="relative z-[2] mt-[325px] h-[30px] w-[17%] md:w-full"
              />
              <div className="relative ml-[-278px] flex flex-1 items-start justify-end md:ml-0 md:self-stretch md:p-5">
                <Text size="xl" as="p" className="mt-44 w-[37%] !text-black-900">
                  <span className="font-bold text-gray-900_01">
                    <>
                      Find & Search Your
                      <br />
                    </>
                  </span>
                  <span className="font-bold text-blue-800">Favourite</span>
                  <span className="font-bold text-black-900">&nbsp;</span>
                  <span className="font-bold text-gray-900_01">Doctor</span>
                </Text>
                <div className="relative ml-[-226px] flex h-[799px] flex-1 items-end bg-[url(/images/img_group_32.png)] bg-cover bg-no-repeat p-[15px] md:h-auto">
                  <div className="ml-[72px] mt-[665px] flex w-[20%] items-center justify-between gap-5 md:ml-0 md:w-full">
                    <div className="h-[79px] w-px bg-white-A700" />
                    <div className="flex flex-col items-center">
                      <Heading size="4xl" as="h6">
                        1M+
                      </Heading>
                      <Text as="p">Active Patients</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* search doctor section */}
            <div className="absolute left-[8%] top-[40%] m-auto flex w-[41%] items-center justify-between gap-5 rounded-[36px] bg-white-A700 p-[7px]">
              <div className="ml-7 flex flex-wrap items-end gap-2.5 md:ml-0">
                <Img src="img_lock.svg" width={16} height={16} alt="lock" className="h-[16px] w-[16px]" />
                <Text as="p" className="!text-black-900">
                  Doctor’s Name
                </Text>
                <Img src="img_arrow_down.svg" width={8} height={4} alt="arrow down" className="mb-[7px] h-[4px]" />
              </div>
              <div className="flex items-end gap-2.5">
                <div className="flex flex-col items-center rounded-lg bg-black-900 p-1">
                  <Img src="img_linkedin.svg" width={6} height={8} alt="linkedin" className="h-[8px]" />
                </div>
                <Text as="p" className="!text-black-900">
                  Location
                </Text>
                <Img src="img_arrow_down.svg" width={8} height={4} alt="arrow down" className="mb-[7px] h-[4px]" />
              </div>
              <Button size="sm" shape="circle" className="w-[56px] self-end !rounded-[28px]">
                <Img src="img_search_white_a700.svg" width={56} height={56} />
              </Button>
            </div>

            {/* support section */}
            <div className="absolute bottom-[38%] left-0 right-0 m-auto flex w-full justify-center bg-blue-800 py-[13px]">
              <div className="container-xs mt-[5px] flex items-center justify-between gap-5 pr-[859px] md:p-5 md:pr-5">
                <div className="flex w-[55%] items-start justify-between gap-5">
                  <div className="flex flex-col items-center">
                    <Heading size="4xl" as="h1">
                      24/7
                    </Heading>
                    <Text as="p">Online Support</Text>
                  </div>
                  <div className="mt-2 h-[79px] w-px bg-white-A700" />
                </div>
                <Text as="p" className="self-end">
                  Doctors
                </Text>
              </div>
            </div>
            <Heading size="4xl" as="h1" className="absolute bottom-[41%] left-1/4 m-auto">
              100+
            </Heading>
          </div>

          {/* why choose us section */}
          <div className="container-xs md:p-5">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <Img
                src="img_rectangle_11.png"
                width={530}
                height={306}
                alt="Rectangle 11"
                className="h-[306px] w-[49%] rounded-[20px] object-cover md:w-full"
              />
              <div className="flex flex-col items-start">
                <Heading size="2xl" as="h2" className="!text-blue_gray-900_01">
                  Why You Choose Us?
                </Heading>
                <div className="mt-[29px] flex items-start gap-[15px] sm:flex-col">
                  <Img
                    src="img_emojione_monoto.svg"
                    width={16}
                    height={16}
                    alt="emojione monoto"
                    className="h-[16px] w-[16px] sm:w-full"
                  />
                  <Text as="p" className="!text-blue_gray-900_01">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="mt-2.5 flex items-center gap-[15px] sm:flex-col">
                  <Img
                    src="img_emojione_monoto.svg"
                    width={16}
                    height={16}
                    alt="emojione monoto"
                    className="h-[16px] w-[16px] sm:w-full"
                  />
                  <Text as="p" className="!text-blue_gray-900_01">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="mt-[11px] flex items-center gap-[15px] sm:flex-col">
                  <Img
                    src="img_emojione_monoto.svg"
                    width={16}
                    height={16}
                    alt="emojione monoto"
                    className="h-[16px] w-[16px] sm:w-full"
                  />
                  <Text as="p" className="!text-blue_gray-900_01">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="mt-[13px] flex items-center gap-[15px] sm:flex-col">
                  <Img
                    src="img_emojione_monoto.svg"
                    width={16}
                    height={16}
                    alt="emojione monoto"
                    className="h-[16px] w-[16px] sm:w-full"
                  />
                  <Text as="p" className="!text-blue_gray-900_01">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="mt-[13px] flex items-center gap-[15px] sm:flex-col">
                  <Img
                    src="img_emojione_monoto.svg"
                    width={16}
                    height={16}
                    alt="emojione monoto"
                    className="h-[16px] w-[16px] sm:w-full"
                  />
                  <Text as="p" className="!text-blue_gray-900_01">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="mt-8 flex items-center gap-[7px]">
                  <Link href="#">
                    <Text as="p" className="!font-medium !text-blue-800">
                      Learn More
                    </Text>
                  </Link>
                  <Img src="img_arrow_left.svg" width={12} height={10} alt="arrow left" className="h-[10px]" />
                </div>
              </div>
            </div>
          </div>

          {/* testimonials section */}
          <div className="flex justify-center self-stretch bg-blue-50 py-[120px] md:py-5">
            <div className="container-xs my-[35px] flex items-start justify-between gap-5 md:flex-col md:p-5">
              <div className="flex w-[42%] flex-col md:w-full">
                <Heading size="2xl" as="h2" className="!text-blue_gray-900_01">
                  <span className="text-gray-900_01">What</span>
                  <span className="text-blue_gray-900_01">&nbsp;</span>
                  <span className="text-blue-800">
                    <>
                      Our Member’s
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900_01">Saying About Us</span>
                </Heading>
                <Text as="p" className="mt-[21px] w-[83%] !text-blue_gray-900_01 md:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                </Text>
                <div className="mt-[34px] flex w-[71%] items-center gap-[27px] md:w-full">
                  <div className="flex flex-1">
                    <div className="flex flex-1">
                      <div className="flex w-full">
                        <Img
                          src="img_ellipse_7.png"
                          width={52}
                          height={52}
                          alt="Ellipse 7"
                          className="h-[52px] w-[52px] rounded-[50%]"
                        />
                        <Img
                          src="img_ellipse_8.png"
                          width={53}
                          height={52}
                          alt="Ellipse 8"
                          className="relative ml-[-18px] h-[52px] w-[53px] rounded-[50%]"
                        />
                      </div>
                      <div className="relative ml-[-18px] flex w-full">
                        <Img
                          src="img_ellipse_9.png"
                          width={52}
                          height={52}
                          alt="Ellipse 9"
                          className="h-[52px] w-[52px] rounded-[50%]"
                        />
                        <Img
                          src="img_ellipse_10.png"
                          width={52}
                          height={52}
                          alt="Ellipse 10"
                          className="relative ml-[-18px] h-[52px] w-[52px] rounded-[50%]"
                        />
                      </div>
                    </div>
                    <div className="relative ml-[-18px] flex w-[36%]">
                      <Img
                        src="img_ellipse_11.png"
                        width={53}
                        height={52}
                        alt="Ellipse 11"
                        className="h-[52px] w-[53px] rounded-[50%]"
                      />
                      <Img
                        src="img_ellipse_12.png"
                        width={52}
                        height={52}
                        alt="Ellipse 12"
                        className="relative ml-[-18px] h-[52px] w-[52px] rounded-[50%]"
                      />
                    </div>
                  </div>
                  <Heading size="xs" as="h3" className="!text-blue_gray-900_01">
                    100+ Reviews
                  </Heading>
                </div>
              </div>
              <div className="flex w-[49%] flex-col items-center gap-[45px] rounded-[20px] border border-solid border-gray-500 bg-white-A700 p-11 md:w-full md:p-5">
                <div className="mt-[5px] flex items-start justify-between gap-5 self-stretch sm:flex-col">
                  <div className="flex w-[33%] items-center justify-center gap-[18px] sm:w-full">
                    <Img
                      src="img_ellipse_10.png"
                      width={52}
                      height={52}
                      alt="Ellipse 13"
                      className="h-[52px] w-[52px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start gap-0.5">
                      <Heading size="xs" as="h4" className="!text-blue_gray-900_01">
                        Jane Cooper
                      </Heading>
                      <Text size="xs" as="p" className="!text-blue_gray-900_01">
                        12/4/17
                      </Text>
                    </div>
                  </div>
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#f5bf00"
                    activeColor="#f5bf00"
                    size={40}
                    className="mt-[5px] flex justify-between rounded-sm"
                  />
                </div>
                <Text as="p" className="mb-[31px] w-[98%] !text-blue_gray-900_01 md:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                </Text>
              </div>
            </div>
          </div>

          {/* future of healthcare section */}
          <div className="container-xs flex items-center gap-8 md:flex-col md:p-5">
            <div className="flex w-[43%] flex-col md:w-full">
              <div className="flex flex-col">
                <Heading size="2xl" as="h2" className="!text-blue-800">
                  <span className="text-blue_gray-900_01">
                    <>
                      The Future <br />
                      of&nbsp;
                    </>
                  </span>
                  <span className="text-blue-800">
                    <>
                      Quality Health
                      <br />
                    </>
                  </span>
                </Heading>
                <Text as="p" className="relative mt-[-37px] w-[93%] !text-blue_gray-900_01 md:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed
                  ullamcorper. Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi
                  sed. Nibh est sit lobortis id semper.
                </Text>
              </div>
              <Text as="p" className="mt-2.5 w-[93%] !text-blue_gray-900_01 md:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper.
                Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit
                lobortis id semper.
              </Text>
              <Text as="p" className="mt-3.5 w-[93%] !text-blue_gray-900_01 md:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper.
                sed. Nibh est sit lobortis id semper.
              </Text>
              <div className="mt-[29px] flex items-center gap-[7px]">
                <Link href="#">
                  <Text as="p" className="!font-medium !text-blue-800">
                    Learn More
                  </Text>
                </Link>
                <Img src="img_arrow_left.svg" width={12} height={10} alt="arrow left" className="h-[10px]" />
              </div>
            </div>
            <Img
              src="img_rectangle_15.png"
              width={666}
              height={460}
              alt="Rectangle 15"
              className="h-[460px] w-[57%] rounded-[20px] object-cover md:w-full"
            />
          </div>

          {/* newsletter subscription section */}
          <div className="container-xs flex flex-col items-center justify-center gap-9 rounded-[20px] bg-blue-800 px-14 py-[84px] md:p-5">
            <Heading size="xl" as="h2" className="mt-2">
              Subscribe To Our Newsletter
            </Heading>
            <Input
              shape="round"
              name="Group 10"
              suffix={
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[50%] bg-blue-800">
                  <Img
                    src="img_arrowleft_white_a700.svg"
                    width={12}
                    height={10}
                    alt="arrow_left"
                    className="h-[10px] w-[12px]"
                  />
                </div>
              }
              className="w-[88%]"
            />
          </div>
          <footer className="flex items-end justify-center self-stretch bg-blue-800 py-[22px] sm:py-5">
            {/* footer section */}
            <div className="container-xs mt-[74px] flex justify-center md:p-5">
              <div className="flex w-full flex-col items-center">
                <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                  <div className="flex w-[31%] flex-col items-start md:w-full">
                    <Heading as="h4" className="!font-semibold">
                      E-sheba
                    </Heading>
                    <Text as="p" className="mt-[31px]">
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed
                        ullamcorper. Auctor semper fermentum
                        <br />
                        <br />
                        volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id
                        semper.
                      </>
                    </Text>
                    <div className="mt-[18px] flex items-center gap-3">
                      <Img src="img_facebook.svg" width={16} height={16} alt="facebook" className="h-[16px] w-[16px]" />
                      <Img src="img_info.svg" width={16} height={16} alt="info" className="h-[16px] w-[16px]" />
                      <Img src="img_trash.svg" width={16} height={13} alt="trash" className="h-[13px] self-end" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-8 self-start">
                    <Heading as="h4" className="!font-semibold">
                      Useful Links
                    </Heading>
                    <ul className="flex flex-col items-start gap-1.5">
                      <li>
                        <Link href="#">
                          <Text as="p" className="!font-medium">
                            About Us
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Text as="p" className="!font-medium">
                            Privacy Policy
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Text as="p" className="!font-medium">
                            Our Mission
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Text as="p" className="!font-medium">
                            Our Team
                          </Text>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex w-[31%] flex-col items-start gap-[31px] md:w-full">
                    <Heading as="h4" className="!font-semibold">
                      Address
                    </Heading>
                    <GoogleMap showMarker={false} className="h-[160px] self-stretch rounded-[10px]" />
                  </div>
                </div>
                <div className="mt-[79px] h-px w-full self-stretch bg-white-A700" />
                <div className="mt-[25px] flex items-start gap-0.5">
                  <Img src="img_user.svg" width={14} height={14} alt="user" className="h-[14px] w-[14px]" />
                  <Text as="p" className="text-center">
                    2022 All Right Reserved
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
