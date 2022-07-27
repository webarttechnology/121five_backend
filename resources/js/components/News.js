import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as moment from "moment";
var Loader = require("react-loader");

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [
                {
                    "id": 1571,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "new test",
                    "url": "https://webarttechnology.com",
                    "image": [
                        "uploads/16202094168657.png"
                    ],
                    "publication_type_id": 1,
                    "key_word": "Test",
                    "is_active": 0,
                    "publish_date": "2021-05-05 12:00:00",
                    "is_headline": 1,
                    "details": "<p>test</p>",
                    "created_at": "2021-05-10T17:31:37.000000Z",
                    "updated_at": "2021-05-10T12:01:37.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 256,
                    "category_id": 1,
                    "sponser_id": 2,
                    "title": "Guardian Avionics Unveils smartPlane System – an iPad-Based Multifunction Display & Flight Data Recorder with AHRS and Voice Command Capability – an MFD for Under $1000 for Your FAA Certified Aircraft",
                    "url": "https://webarttechnology.com",
                    "image": [
                        "uploads/guardian-avionics-smartplane-system_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "When was the last time you saw",
                    "is_active": 1,
                    "publish_date": "2021-04-12 12:00:00",
                    "is_headline": 1,
                    "details": "When was the last time you saw a full-featured, installed multifunction display system for a certified General Aviation aircraft for less than $1000? When was the last time you interacted with your display by voice? If your answers for both of those questions was “I haven’t” – then you need to read on!\r Guardian Avionics of Tucson, AZ is pleased to unveil the new smartPlane system and line of products and applications – an FAA approved iPad-based Multifunction display and flight data recorder system with voice command capability. The smartPlane system was designed to give owners a budget-friendly multifunction display option for their panel while collecting, storing, and displaying valuable long-term flight and performance data in an easy to use format online to help improve efficiency and reduce costs for the General Aviation aircraft owner.\r The smartPlane system allows users to connect select EFIS, GPS, and Engine Monitor products to four new smartLink products from Guardian Avionics (smartLink 554, smartLink 555, smartLink 650, and smartLink 851), which collect and transmit to the smartMFD iOS application by USB or Bluetooth. The smartMFD application displays moving map and Electronic Flight Bag (EFB) functions along with a large engine monitor screen while recording all data behind the scenes. It can even be controlled on the iPad by voice commands similar to the popular “Siri”. When the flight is complete, the data is uploaded to the smartCloud web application where it can be reviewed and shared with others, such as mechanics and manufacturers. Other value-added features include Carbon Monoxide detection, Real-time Aircraft Tracking, Pilot Logbook, Aircraft Flight Logs, and Discrepancy Reports (squawk list).\r “Pilots of certified aircraft have been using their iPads in the cockpit to replace kneeboards and charts for some time now… and smartPlane is the first step to allow the iPad to replace or supplement MFD displays IN the panel” said Ash Vij, President of Guardian Avionics. “This is the kind of progress that helps bring the cost of aircraft ownership down for aircraft owners.”\r All products in the smartPlane product line are built on the Carbon Monoxide (CO) poisoning prevention technology that Guardian Avionics has been known for. The smartLink 554, smartLink 555, smartLink 650, and smartLink 851 all include the highly sensitive electrochemical CO detection sensors as installed as standard safety equipment in all new single engine aircraft from Cessna, Cirrus, Piper, and Diamond.\r In addition to the announcement of the new smartPlane products and applications, Guardian Avionics is also rebranding their line of popular iPad and iPhone instrument panel flush mounts as smartPanel Mounts and USB power supplies as smartPower under the smartPlane line to mount and power the iPad focused system inside instrument panels.\r Best of all, the FAA has approved the smartPlane product line for installation in FAA Certified Part 23 aircraft under the NORSEE (Non-Required Safety Enhancing Equipment) authorization. It requires only a minor alteration logbook entry by the installing A&P mechanic – no costly STC or field approvals needed. All products in the smartPanel and smartPower line were previously NORSEE authorized. Guardian Avionics was the first company granted NORSEE authorization when the program launched in the summer of 2016.\r Guardian Avionics is offering a special at EAA AirVenture where customers may preorder the smartLink 851 system with flight data, AHRS, USB power, and CO detection and will get a smartPanel iPad Mini or iPad Air / Pro 9.7” mount with the package. A full multifunction display package for $899.\r For more information on the smartPlane System, please visit www.GuardianAvionics.com/smartPlane or visit Guardian Avionics at EAA AirVenture Oshkosh in the Epic Aviation C Hangar, booth C-3143. Guardian Avionics will hold a press conference on the new smartPlane System at EAA AirVenture on Wednesday, July 26 at 1:00pm at the EAA Press Headquarters.\r About Guardian Avionics\rBased in Tucson, Arizona and established in 1999, Guardian Avionics / CO Guardian is a leading provider of Carbon Monoxide detectors, iPad/iPhone panel mounts, USB power supplies, and connected cockpit solutions for General Aviation ranging from portable units to FAA TSO certified models. For more information, please visit www.GuardianAvionics.com or contact by phone at 520-889-1177. [ home ]",
                    "created_at": "2021-05-05T16:23:35.000000Z",
                    "updated_at": "2021-05-05T10:53:35.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 2,
                        "name": "Tester",
                        "company_name": "Tester Company",
                        "email_id": "tester@gmail.com",
                        "mobile_no": "9874632363",
                        "address": "kolkata",
                        "url": "https://tester.com"
                    }
                },
                {
                    "id": 512,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Sonex and Waiex \"Model B\" Announced",
                    "url": "",
                    "image": [
                        "uploads/SNB_top-down-390_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "February 18, 2016, Oshkosh, WI: Sonex Aircraft is very excited to announce its latest aircraft development project: Sonex and Waiex B-Models. \r³What is the B-Model?² asks Sonex designer and founder John Monnett, ³It¹s what you¹ve been asking for! More of everything you want in a sport aircraft: More room and comfort, more panel space, more fuel, more engine choices, and more standard features combined with reduced build time and the same great Sonex and Waiex flight characteristics.²\r Sonex and Waiex B-Models have been enlarged by straightening of the forward fuselage sides, and feature improved creature comforts:\r € More width and comfort at the shoulders, hips, knees and feet.\r € Seat back is moved aft, and new seat geometry accommodates taller individuals.\r € Staggered seating is available via upholstery seat back cushions.\rCenter ³Y-Stick² offers dual controls with easier cockpit entry and roomier seating.\r € Electric Flaps reduce cockpit clutter and Dual Throttles are standard.\r The enlarged B-Model instrument panel offers plenty of space for today¹s popular dual-screen avionics installations (including the MGL iEFIS Explorer 8.5² displays) with room to spare. The new B-Model fuel tank holds 20 US gallons ­ a 4-gallon increase over the original Sonex and Waiex.\r Sonex Aircraft is expanding engine options with the Sonex and Waiex B-Models, offering the same great firewall-forward support for AeroVee/AeroVee Turbo and Jabiru/CAMit 3300 engines, while adding engine mount options for UL Power 350i, 350is, and Rotax 912-series engines. A new universal cowl is designed to fit all 4 options.\r B-Model kits will ship with more standard features, and will require less build time. Assembled Wing Spars and Machined Angle Components are now standard. Upgrades and accessories such as the AeroBrake Hydraulic Brakes, dual AeroConversions Throttle Quadrants, and AeroConversions Trim System are now included. Build time improvements include more laser-cut, formed and machined parts, machined canopy bows for easier installation with a better fit, an easy-fitting horizontal-split cowl, and engine mounts that bolt quickly and accurately to the airframe.\r B-Models will completely replace the original model Sonex and Waiex in the Sonex Aircraft product lineup. New Sonex and Waiex original model kits will only be available for a limited time, however original model sub-kits will still be available to those needing to complete existing projects and legacy service parts will still be produced according to demand. B-Models will only be available in kit form, however, the original model Sonex plans will still be available to scratch builders.\r Sonex and Waiex B-Model kits will be offered at an introductory price of\r$23,000 and refundable Kit Reservation Deposits are now available at $1,000 per reservation. Deposit holders will be placed in-line for B-Model kit delivery slots according to date and time of deposit. B-Model kit deliveries are estimated to begin in June, 2016. Customers seeking the earliest shipping opportunities may purchase a B-Model Tail Kit with their Kit Reservation Deposit, and they will be moved to the front of the line. Tail Kits will begin shipping in March.\r Attendees of the upcoming February 27-28, 2016 Sonex Builders Workshop will enjoy the first opportunity to see the B-Model prototypes in-person as they are being constructed in the Sonex Research and Development facility. The Waiex B-Model prototype will be taken to Sun Œn Fun 2016 for a public unveiling ceremony on Tuesday, April 5th at 9:30 am in the Sonex Aircraft exhibit booth (NE-11/29).\r Sonex Aircraft, LLC is a leader in the experimental kit aircraft industry, providing a series of sport aircraft along with the AeroConversions line of products, which include the AeroVee engine, AeroVee Turbo, AeroInjector and ancillary aviation products. Sonex Aircraft¹s Sonex, Waiex, and Onex sport planes, the Xenos sport motorglider, and the SubSonex Personal Jet, offer outstanding performance in an easy to build, easy to fly kit package that can be purchased and completed with full technical support at an unrivaled price. Highly regarded as an engineering company, Sonex has diversified its offerings to include the Teros line of UAV aircraft for civil and defense missions in conjunction with Navmar Applied Sciences Corporation. Sonex and AeroConversions continue to invest heavily in developing new products. Our team is committed to providing simple, elegant and low-cost solutions for sport flying. Simply put, Sonex Aircraft and AeroConversions products provide the Best Performance Per Dollar. Check us out at www.SonexAircraft.com and www.AeroConversions.com\r  HIGH RESOLUTION IMAGES AVAILABLE FOR DOWNLOAD AT:\rhttp://www.sonexaircraft.com/press/releases/pr_021816.html\r [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 768,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Zigolo Ultralight: Two power options coming to Oshkosh",
                    "url": "",
                    "image": [
                        "uploads/20140716_223641_700w_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "The first Zigolo in China is now finished and was introduced to the public on 17 July at the Jingmen Airshow. The Zigolo was supplied in kit form by Aeromarine LSA (Lakeland, Florida) and built in only 3 weeks by Chip W. Erwin.\r Concurrently, a Zigolo assembly facility was established in the AVIC R&D center in Jingmen to supply the Chinese market with Ready-to-Fly (RTF) Zigolos.\r “The Chinese have been shipping thousands of RTF RC model aircraft to the USA. Now they will have the capability to build a man-carrying light aircraft for their own market,” said Chip Erwin, Zigolo president. He noted that the technology and design gap between large RC aircraft and this ultralight motor-glider is small; with the coming electric-powered version of the Zigolo, the gap narrows further. He continued, “The Zigolo is similar to what they already build, just on a larger scale.”\r The Chinese CAAC recognizes the FAA Part 103 rule, which means that Chinese customers can actually fly legally and fly now in China, something that has not been so easy in LSA or other GA aircraft to date. \r The Zigolo is already available in kit form; typical build time is about 150 hours. Delivery positions are now available for the RTF version; first deliveries are planned for later this year.\r Both electric and gas–powered Zigolo ultralights will be on display and in the air at Airventure Oshkosh 2014. \r See the Zigolo in the ultralight area, booth 939.  An Oshkosh show special for new orders will be offered.\r Zigolo: everything you need, and not much else.\r Visit Aeromarine’s new web site for Zigolo videos and more information on all of Aeromarine’s aircraft. www.aeromarine-lsa.com [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 1024,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Can you hear me now? Tactical Hearing testing in Hangar B",
                    "url": "",
                    "image": [
                        "uploads/CB Series_s_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Do you know how many times someone has asked you why you don’t get something done about your hearing? Well, if the answer is once or more, you don’t – you’ve probably missed someone.\rHearing loss is insidious, like the proverbial “boiling a frog,” where the losses are generally very slight, and over a long period of time. Hearing loss is cumulative, and one day, we wake up and realize that other people hear what we can’t.\r Maybe it’s just a little annoying… to us. But it’s a lot annoying to others; and in the air, it can be downright dangerous.\r Hearing technology has improved exponentially over the past decade or so, since custom-tuned multi-band digital devices have proliferated. Light and almost invisible in the ear canal, these digital hearing devices (no one calls them “hearing aids” any more) can boost sound in the frequency bands where the ear is lacking, or where the hearing has been damaged.\r Better yet, the new “Tactical” devices also operate as effective hearing protectors. When a too-loud sound is detected, a tactical hearing device shuts down, blocking rather than amplifying the sound – it acts like a custom-fit earplug, to save your hearing!\r Learn about what good hearing can be, and learn how much prices have come down, since you first heard about multi-band digital devices. And learn how Tactical Hearing can fit you with comfortable, effective hearing enhancement that also preserves your hearing, through its active attenuation of too-loud noises, be they from shooting, race car exhaust… or flying.\r You can get fitted and tested right at the show!\r Visit Tactical Hearing at Airventure Oshkosh 2013 – Hangar B: 2160.\r For more information: www.tacticalhearing.com  \rEmail: info@tacticalhearing.com \ror call (1) 801-822-6888 [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 1280,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Two Evolution First Flights in One Afternoon",
                    "url": "",
                    "image": [
                        "uploads/longwill_jackson_68-1web_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "“FOR IMMEDIATE RELEASE”\r Press Contact:\r Doug Meyer\rLancair International\r(541)923-2244\rdougm@lancair.com\r Thursday, October 20, 2011\r Two Evolution First Flights in One Afternoon\rNeal Longwill and Kevin Jackson, both from Austin Texas, have been busy for the last 10 months building TWO Lancair Evolutions. Wednesday, Oct, 19 both aircraft flew for the first time at Redmond, OR. The Evolution kits were assembled side by side by Neal and Kevin in a rented hanger at KRDM. Longwill and Jackson temporarily moved to Redmond to build their planes so that they could be close to the kit manufacturer’s headquarters for advice during their building process. Also, they provided the factory with feedback to fine tune the build manual supplied to kit builders. Each had built Lancair’s before, Neal a Lancair IV-P and a Legacy, and Kevin a Lancair ES. They worked less than full time on their Evolutions and “kept it fun”.\rThe test flights were performed by Pete Zaccagnino, who’s company, High Performance Aircraft Training, supplies test pilot and training services to Lancair builders. The first flights and transition training are included with the purchase of each Evolution kit. The flights were nearly squawk free with only a high idle reported on the second aircraft.\rNeal Longwill is the Sales representative for Lancair in the southern U.S. His company is Austin Composites and his plane, N248AJ, will be his demo aircraft based at Spicewood, Texas. Jackson’s aircraft, N282CA, will be used for personal transportation for him and partner Chris Avery.\rEach aircraft will continue flying to complete their initial testing, subsequent Phase 2 flight test period, and then receive final paint and interior upholstery.\r [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 1536,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "New Service Bulletin: Rotax 912/914 Series; Prop Governors",
                    "url": "",
                    "image": [
                        "uploads/rotax_default.gif"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Www.Rotax-Owner.com has just posted a new Service Bulletin pertaining to certain models of Rotax 912 and 914 engines with propeller governors.\r SB-912-052 R2 pertains to 912-series engines and SB-914-035 R2 pertains to 914-series engines.\r These SBs cover installation and use of propeller governors on the affected engines. Compliance is \"On customer request.\"\r For the complete SBs, please paste this URL to your browser:\rhttp://www.rotax-owner.com/SI_TB_Info/ServiceB/SB-912-052.pdf\r  [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 1,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Aero Charting v1.2: free download brings user-defined waypoints,  graphical route creation, and flight track recorder to nav App",
                    "url": "",
                    "image": [
                        "uploads/v-1-2-comp copy_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Sherwood, OR—June 3, 2019—Eagle Cap Software introduces Aero Charting version 1.2, packed with enhanced routing capabilities:\r•\tUser-defined waypoints enable the pilot to save their favorite locations on the map for sightseeing, turns around a point or the perfect cross-country flight.\r•\tDrag and drop route creation and editing allows the pilot to tap on a favorite airport, navaid or user-defined waypoint to quickly build routes on the map. In addition, route edits are made easy by dragging the route line to any airport, navaid or user defined waypoint with the help of a magnifying glass.\r•\tEnroute flight track recorder tracks the actual flight path of the aircraft and will save and display it after the flight to help improve ground reference maneuvers or see how well that instrument approach was flown. \rBrian Leutschaft, Program Manager - Eagle Cap Software, says, \"Our team of pilots and technologists is rapidly adding capabilities to Aero Charting, the newest simple and easy-to-use aviation moving map available. Version 1.2 adds powerful capabilities that include: user defined waypoints, graphical route creation/editing and an enroute flight track recorder. We continue to build an increasingly useful set of features.\" Leutschaft continued, \"These enhancements keep improving Aero Charting – and,\" he reminds us, \"it's still a free download.\"\r Price & availability:\rThe Aero Charting app is a free download. \rOptional chart coverage pricing is as follows:\r Vector aeronautical charts and the application are always free!\r 12-month IFR Enroute Chart subscription ($49)\r 12-month VFR Sectional Chart subscription ($49)\r Bundle of both subscriptions ($69), plus ad removal\rAbout Eagle Cap Software\rEagle Cap Software designs, integrates and builds custom aviation software solutions. Find out more at www.EagleCapSoftware.com.\rAero Charting is built using Eagle Cap’s Aeronautical Charting Service (ACS) and Data Delivery Service (DDS) products. Both components enabled the rapid development of Aero Charting. ACS provides the ability for application developers to add aviation data layers to their products. DDS enables data management for mobile applications including transferring, tracking, and updating data. Both components are available to license.\rAero Charting is available only on the iPad.\rLinks:\rMore about Aero Charting www.aerocharting.com\rApple Store link https://itunes.apple.com/us/app/aero-charting/id1437817082\r#########\rFOR MORE INFORMATION, including high-resolution images, PLEASE CONTACT:\rBrian Leutschaft, Product Manager\r(503) 951-9817\rmailto:brianl@eaglecapsoftware.com\r [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 257,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Free Pain Relief Tube Offer",
                    "url": "",
                    "image": [
                        "uploads/20170717_080847_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Stop By The Real Time Pain Relief (Bright Yellow Tent In The Fly Mart & Get $25 In Free Product / Gift Cards With Any Purchase. see booth for restrictions and or alternate bonuses and or discounts. Limit 1 Per House Hold. offer valid during the 2017 Oshkosh Fly In. FDA Registered, Doctor Recommended, Made in the US, Contains Natures Ingredients, 20yrs Proven, Safe & Effective Pain Relief. [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 513,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Daher unveils new features of its Model Year 2016 TBM 900 very fastturboprop aircraft",
                    "url": "",
                    "image": [
                        "uploads/TBM900_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Enhancements introduce “e-copilot” capabilities for reduced pilot workload and increased safety.\rSingapore, February 17, 2016 – The Model Year 2016 version of Daher’s TBM 900 very fast turboprop aircraft incorporates improvements to further enhance flight envelope protection, improve warning identification and facilitate flight planning.\rThese enhancements, which are being detailed during this week’s the Singapore Airshow at the Changi Exhibition Centre, were introduced with Garmin’s new software release for the G1000 V15 avionics suite – which is the TBM 900’s all-glass cockpit configuration.\r“With the Model Year 2016 TBM 900, we are offering our customers a concentration of innovation, technology and safety improvements that can be compared to bringing an ‘e-copilot’ into the cockpit to reduce the pilot’s workload,” explained Nicolas Chabbert, the Senior Vice President of Daher’s Airplane Business Unit. “Those innovations reflect our policy of constant improvement, which offers TBM customers the latest technology available for the optimized use of their aircraft.”\rThe enhancements include:\r Flight envelope monitoring through the Electronic Stability and Protection (ESP) and the Under-speed Protection (USP) systems, both of which have been added to the autopilot. These electronic monitoring and stability augmentation systems assist the pilot in maintaining the aircraft in a stable flight condition when flight parameters are exceeded.\r New aural alerts for stall, overspeed, landing gear extension and oxygen mask use.\rThese alerts replace aural sounds for better warning identification.\r An AOA (Angle of Attack) sensor with visualization on the cockpit’s Primary Flight Display electronic instruments.\r Two-way wireless link-up to the aircraft’s Garmin G1000 all-glass cockpit avionics suite from a mobile device that runs the Garmin Pilot™ application. This Bluetooth® linkup is via Garmin’s Flight Stream 210 wireless gateway, and enables the syncing of prepared flight plans and streaming of GPS, weather, traffic and other information to/from the avionics system.\rIn addition, Daher is including the L-3 Lightweight Data Recorder from L-3 Aviation Products as standard equipment on the TBM 900 for voice and flight data recording. This 5 lb.-category system has become an industry reference for general aviation and executive aircraft, as well as helicopters.\rOffered by Daher as a TBM 900 option is the Garmin GRA™ 55 all-digital radar altimeter, which provides highly accurate altitude-above-ground and rate-of-change readouts. [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 769,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Honda Racing Engine in Aircraft",
                    "url": "",
                    "image": [
                        "uploads/Honda Racing Fit_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Honda Racing sell a fantastic racing engine with the same internals as the Viking Aircraft Engine.  Honda is recognized as the #1 engine manufacturer in the world and Viking has been able to use this technology in their Viking 110 engine.  For the Honda race engine story, Google formula Ford racing and Honda engine.  All Viking 110 engines have these same parts installed in every engine. [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 1025,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Expo joins Flying Musicians Association as a Corporate Member",
                    "url": "",
                    "image": [
                        "uploads/140x104Expo_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "July 18, 2013: Fort Worth, TX: The Flying Musicians Association is proud to announce that the U.S. Sport Aviation Expo has joined as a corporate member to show their support for the Flying Musicians Association (FMA).\r U.S. Sport Aviation Expo is proud to support FMA and the passion they bring to the blending of music with aviation.  This nonprofit group offers tremendous enthusiasm and inspiration for the sport of music and flying.\r John Zapp, President/CEO of FMA, said, “This is fantastic news and a first for FMA.  Having participated at Expo for two years, not only have they invited us back in 2014 but they are truly showing their gratitude and support by becoming our first event corporate member.”\r About U.S. Sport Aviation Expo:\rThe Sebring Regional Airport will host the 10th annual Expo January 16-19, 2014 — the largest sport aircraft event in the world to \"See, Try, Fly, and Buy\" sport aircraft. \rThis event, with its focus on Sport Aircraft and the Sport Pilot Certificate, continues to grow in importance and in attendance with a great group of exhibitors/sponsors, media, and concessionaires.  These associates travel to Sebring from nearly forty states and several foreign countries.  Attendees come to Sebring to see, try, fly and, in some cases, buy a new plane and all the necessary gear for both plane and pilot. Exhibitors include dealers, manufacturers, and engineers of aircraft, avionics, electronics, and pilot supplies in addition to training systems, aircraft insurance, and financial institutions.  Sport Aircraft include Fixed-Wing Airplanes, Trikes, Powered Parachutes, Gliders, and Gyroplanes as well as Floatplanes and Amphibians.\r More: www.sport-aviation-expo.com \r About the Flying Musicians Association:\rThe Flying Musicians Association, Inc. is a 501(c)3 non-profit organization founded in 2009 consisting of pilots who are musicians, spanning the globe, proficiency levels and genres.  The goal is to share our passions in order to inspire, educate, and encourage others by creating enthusiasm and promoting personal growth in aviation and music.\r “Pilot Musicians sharing their passion while encouraging and educating youth (& adults) in the science and art of aeronautics and music.”\r More: www.FlyingMusicians.org [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 1281,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Sikorsky Aerospace Services & Aircraft Technical Publishers Collaborate for Distribution of Technical Documentation to Civil Helicopter Operators Worldwide",
                    "url": "",
                    "image": [
                        "uploads/ATP_Default.JPG"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "NBAA, LAS VEGAS, Nevada - Sikorsky Aerospace Services (SAS) today announced that it signed an agreement with Aircraft Technical Publishers (ATP®) to collaborate on an advanced technical documentation distribution solution supporting operators of Sikorsky civil helicopters worldwide. SAS is the aftermarket business of Sikorsky Aircraft Corp. Sikorsky Aircraft is a subsidiary of United Technologies Corp. (NYSE:UTX). \r The technical documentation distribution solution developed from this collaboration includes ATP’s patented NavigatorV™ desktop platform with automated revision updates. The platform is expected to provide those SAS customers subscribing to SAS’s commercial publications services with improved productivity, enhanced information currency, and patented search and indexing tools for faster and more complete library searches. SAS commercial publications customers will receive access to a maintenance and regulatory library, including Airworthiness Directives (AD) and Service Bulletins (SB) for each Sikorsky civil helicopter model selected. SAS customers subscribing to the commercial publications service will receive an email notification whenever an AD, SB, or Temporary Revision is available for the Sikorsky civil helicopter models selected. The content for each selected Sikorsky civil helicopter model will be updated twice a week over the internet through ATP’s EZ Update feature.\r The ATP agreement aligns with our objective to deliver accurate and timely technical data that enables our customers to more safely operate, maintain and modify their aircraft, maximizing readiness while minimizing lifecycle cost,” said James Heun, General Manager of SAS Maintenance Planning and Publications. “The Sikorsky publications deployed in the ATP NavigatorV&™ toolset will provide more current information to our customers and are expected to improve operator efficiency and increase safety and compliance with ADs and SBs.”\r According to Rich Marino, President of ATP, “We are confident that this agreement between SAS and ATP will provide a valuable customer benefit by utilizing ATP’s core competencies for technical publication management and distribution. ATP is committed to providing Sikorsky and their customers with next generation knowledge services.”\r ATP is a global knowledge services company providing safety and compliance information for the aviation market. Backed by 35+ years of experience, ATP solutions combine innovative technology, industry expertise, expedited information access and reporting. ATP’s comprehensive content services and software applications deliver vital knowledge to support the mission critical requirements of mechanics, schools, governments, operators and carriers worldwide.\r Sikorsky Aerospace Services, a Sikorsky company, provides comprehensive support to rotary and fixed wing operators around the world. It offers its military and commercial customers a full portfolio of support services, including material distribution, maintenance, overhaul & repair, aircraft modifications and life-cycle support. Sikorsky Aircraft Corp., based in Stratford, Conn., is a world leader in helicopter design, manufacture and service. United Technologies Corp., based in Hartford, Conn., provides a broad range of high technology products and support services to the aerospace and building systems industries.\r [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 1537,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "No Arms, No Problem: Jessica Cox Earns Pilot’s License",
                    "url": "",
                    "image": [
                        "uploads/LGjessica356458497_2gRMP-O-1_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Three years ago, 25-year-old motivational speaker Jessica Cox hadn’t been in a small airplane. On October 10th, she earned her Airman’s Certificate in a 1945 Ercoupe 415C, an airplane designed to bring the postwar generation into the sky.\r Jessica, born without arms, enjoyed her first flight as a passenger, but she didn’t get the idea of flying, herself, until she read an article about Glen Davis, who had used the no-rudder-pedal Ercoupe to give flying lessons to a young man with spina bifida. “I thought,” she remembered, “that I could fly an Ercoupe!” Glen was her primary instructor, taking Jessica just up to where she was ready for first solo. She couldn’t solo that airplane, though, since the throttle was in a spot she couldn’t reach.\r Since Jessica holds an unrestricted driver’s license, she qualified medically under the Sport Pilot rules, which limit some operations and also require certain aircraft specifications, such as weight, speed, and carrying capacity.\r Not all Ercoupes qualify under the LSA (Sport Pilot) rules, and Jessica’s initial flight in a D model showed the throttle was in the right place, but that airplane was too heavy to qualify under the 1320-pound LSA limit. She found a perfect C model, though, just 45 minutes from home, owned by CFI Parrish Traweek, owner of PC Aircraft Maintenance at the airport in San Manuel, AZ. Tarrish took Jessica through her checkride. Able Flight supported Jessica in continuing her flight training in Parrish's Ercoupe with a scholarship given to her in March.\r Jessica soloed on Mother’s Day (May 11, 2008), and took her successful checkride on October 10. She is the first person without arms to have been licensed to fly with only her feet – no prosthetics and no aircraft modifications, other than a seat cushion. Jessica is just 5’1” tall.\r Jessica’s other accomplishments are no less inspiring (appropriate for one in her profession). At age 14, she earned her first black belt in tae kwon-do; and more recently, she graduated from the University of Arizona with a degree in psychology, and another black belt, the first person without arms to earn one from the American Tae Kwon-Do Association.\r Control Vision, makers of Anywhere Map®, heard from Jessica’s flight instructor and sent her their new ATC (Anywhere Travel Companion), high-functioning GPS nav-aid with a 4.3” touch-screen interface, introduced this year at Sun ’n Fun. Jay Humbard, President of Control Vision, said, “The ATC seemed perfect for her needs – touch screen, big buttons, easy to use, with shallow menus.”\r “It’s a lot easier to use than the sectional charts.” Jessica smiled, “Though of course I use it only as a backup navigation device,” in compliance with the FAA’s requirements.\r [Glen Davis photo]\r Read more about Jessica at www.rightfooted.com. This release is sponsored by Control Vision Corp (www.controlvision.com), makers of Anywhere Map and sponsors of www.100LL.com.  [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 2,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Red Bull Air Race to Conclude in 2019",
                    "url": "",
                    "image": [
                        "uploads/RedBull_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Just three Red Bull Air Races remain.\rRed Bull Air Race World Championship has announced the series will not continue beyond 2019. Three races remain: Kazan, Russia on June 15-16; Lake Balaton, Hungary on July 13-14; and Chiba, Japan on September 7-8.\rThe statement released from Red Bull on May 29 called for an end to the global racing series that took the world by storm starting in 2003.\rRead the full statement from Red Bull Air Race in the 121five HEADLINES, above.\rTeam 99 has had the distinct honor of participating in the Red Bull Air Race since 2006 and Michael Goulian has been a dedicated contender in the professional racing series that has been fiercely sought after by some of the world’s top aviators over the span of its 13 seasons.\rGoulian is thankful and humbled by his experience with the series: “Racing around the globe in amazing locations while meeting so many spectacular fans and making lifelong friends will certainly be one of the highlights of my aviation career.”\rTeam Goulian extends gratitude to Red Bull for having the vision to create a series that captivated the hearts and imagination of so many fans around the world.\r2018 proved to be an amazing campaign for Michael Goulian and his team, with two wins and five podiums. The year brought the highlight of Goulian’s racing career: a historic win at the famed Indianapolis Motor Speedway, making it their best season to date.\rWith one podium already achieved in the 2019 series opener in Abu Dhabi, Goulian’s focus is to continue to be a front runner in the remaining three races.\rFor 2020 and beyond, sport aviation fans will be able to continue to follow Michael and Team Goulian as they continue to perform in air shows around the globe. [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 258,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "MIRACHECK COPILOT IS THE FUTURE OF AVIATION SAFTEY",
                    "url": "",
                    "image": [
                        "uploads/miracheck-news-oshkosh_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Pittsburgh, PA, July 17, 2017: Miralou Aero announced today its newest creation MiraCheck CoPilot, a mobile voice assistant checklist which is a giant leap forward in general and commercial aviation safety. MiraCheck CoPilot utilizes voice prompts (Mira) to combat complacency that can occur when pilots read or check the same items over and over. It was designed to navigate content in the most efficient way possible. Emergency procedures, for example, can be narrated in the pilot's ear within seconds. The app provides a framework for a much richer checklist including textual content, URL links, images and videos. More detailed rich content can also be associated with each item as overlay comments and personal notes can be captured. MiraCheck CoPilot combines the convenience of today’s mobile technology, voice assistance and easy to use customization across Apple and Android devices including smartphones, tablets and the Apple Watch for preflight procedures and inspections. It also integrates with Bluetooth aviation headsets for audio in the cockpit.\r \t“I had two incidents as a pilot that was the catalyst for building the MiraCheck ecosystem. One was a prop strike and $30,000 engine teardown claim one month after getting my first airplane for being distracted and leaving the towbar on. Another was a harrowing emergency landing because of oil spraying profusely across my plane’s windshield,” said Jeff Bonasso, founder and Chief Design Officer of Miralou Aero. “After picking up after an oil change with a seasoned mechanic I made the mistake of not thoroughly doing a preflight. The MiraCheck ecosystem will allow pilots to easily share their experiences to make other pilots much safer.”\r MiraCheck CoPilot’s mobile app is where the pilot interacts with checklist procedures.  The app provides a standard aviation checklist with the option for the pilot to edit and customize the checklist to suit any personal preferences and workflows. Mira will help every step of the way with voice assisted checklist details combined with a display checklist giving pilots a two-pronged safety net before takeoff and during flight. Checklists are only the beginning. Our vision is a true digital co-pilot where other inputs like GPS, camera and flight data can further provide information for Mira to assist and make flights safer.\r MiraCheck CoPilot includes MiraCheck Cloud. Its aim is to be a central hub for the community to share their expertise on any air safety subject. It has robust editing tools as well as a powerful search engine to easily discover other checklist procedures. The ultimate goal of a tool like MiraCheck CoPilot is to reduce human error and enable pilots to learn and repeat procedures in the most efficient way possible. The app reinforces the imperative that each pilot and co-pilot follow a strict set of procedures to ensure safety in the air.\r Miralou Aero LLC is based in Pittsburgh, Pennsylvania. Jeffrey Bonasso is the Founder/CEO/Chief Design Officer. He has more than 25 years of experience in the area of learning software and content management systems. Additional checklist products are being developed/explored for the hospitality, trucking, mining, steel, construction and healthcare industries.\r\t\t\t\t\t\t###\r For more information contact:\rJeff Bonasso\rjeff.bonasso@miralouaero.com\r404-432-8997\rMiralou Aero LLC\rhttp://www.miracheck.com\r [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 514,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "First USA Merlin PSA now flying!",
                    "url": "",
                    "image": [
                        "uploads/vlcsnap-2016-02-15-08h38m55s321_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Lakeland, Florida, February 12, 2016: “The acceleration and climb rate are exhilarating,” says pilot Chip W. Erwin. “It brings the sport back into sport planes with a power-to-weight ratio about 50% higher than most LSA aircraft. It will be perfect on our new amphibious floats!” \r The Merlin PSA (Personal Sport Aircraft) is an Experimental – Amateur-Built class aircraft that fits inside the “LSA box” and can be flown under LSA pilot/medical rules. \r A complete kit, including the builder’s assist program, is only $34,900. The demo aircraft test flown today is very nicely equipped, with a ‘glass panel’ EFIS/EMS, 2 x GPS, transceiver, an ADS-B out-equipped Mode S transponder, BRS parachute system, electric trim and the new TruTrack ECO autopilot, all for around $50,000. \r Introduced at the US Sport Aviation LSA Show in Sebring just last month, the Merlin PSA drew comments like “It only costs $35,000? And that price really includes the engine?” and “This changes the way I think about LSA.” \r “Flight conditions were less than ideal, with gusty winds and choppy turbulence but the Merlin handles these conditions perfectly. The pilot sits right on the longitudinal axis and the wing loading is higher than the average LSA, so it is quite comfortable flying all day long. I was seeing cruise speeds over 100 mph and climb rates of 1,400 FPM,” Erwin explains. \r The all-aluminum Merlin PSA is available now as a quick-build E-AB (Experimental Amateur-Built, \"51% Rule\") aircraft. It is a modern design, created on 3D CAD/CAM equipment, resulting in easy-to-build matched-hole assemblies that require no fixtures, so build time is measured in days rather than months or years. Builders can enjoy a couple of weeks at the Builders' Center in Florida and fly their new Merlin PSA. Not \"taxi.\" Fly. And South Lakeland Airport, where the Builder's Center is located, is close to all the theme parks and attractions, so the family will be busy and entertained during the build program. \r An available-optioned Merlin PSA taildragger with tundra tires is now flying in Europe.\r The next step, after flying off the test program, is to install the amphibious floats. They are finished, and the gear is operating perfectly with the remote wireless Bluetooth phone app for actuation. \r For more information on the aircraft that will change how you think about LSA, visit: www.aeromarine-lsa.com Chip W. Erwin chip@wetaero.com \r+1 262 408 0124\r [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 770,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "2014 marks 75 years of aviation education at WMU",
                    "url": "",
                    "image": [
                        "uploads/WMU 75 Year Logo_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "KALAMAZOO—The faculty, staff and students in one of Western Michigan University's most technically advanced disciplines are about to spend the coming year turning back the pages of history to celebrate their roots.\r Throughout 2014, WMU's College of Aviation will mark its 75th year of providing aviation education through what has become one of the top such collegiate programs in the world. The college's three undergraduate degree programs date back to 1939 when WMU jumped headlong into what was still an area of study and an industry in its infancy. The Wright brothers' first sustained flight had only taken place 36 years earlier in 1903, the year WMU was founded.\r WMU's college is planning a series of events during the coming year to mark the storied history of aviation at WMU. College officials say the first events will likely take place later this spring and the anniversary celebration will become part of many of the college's regularly scheduled events. The initiative to mark the 75th anniversary will formally conclude in the fall with a major celebratory event.\rA long history of aviation education\r In 1939, the Michigan State Board of Education authorized and approved Western Michigan to offer a two-year, non-degree curriculum in Vocational Aviation Mechanics designed to prepare students for positions as licensed airplane mechanics, licensed engine mechanics, airplane factory mechanics and pilot mechanics.\r That same year, WMU began offering the ground school portion of the Civilian Pilot Training program, sponsored by the federal government, with the flight portion of the program contracted out. Both the mechanics programs and the pilot training initiative were under the direction of Elmer C. \"Buck\" Weaver.\r By 1947, WMU had established a four-year bachelor's degree curriculum called air transportation, and by 1955, the University started its own flight-training program at the Plainwell, Mich., airport. The Kalamazoo airport was the program's home from 1959 to 1997, when it moved to Battle Creek, Mich.'s W.K. Kellogg Airport. In 1999, WMU's aviation programs were organized into the College of Aviation—WMU's seventh degree-granting college.\r Today, the college offers bachelor's degrees in aviation flight science, aviation management and operations and aviation maintenance technology to nearly 800 undergraduates. [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 1026,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "Zenith Invites all Oshkosh to \"Engine Day\"",
                    "url": "",
                    "image": [
                        "uploads/DSC06250_thumb.jpg"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "In 2012, Zenith hosted its first “Engine Day” at Oshkosh, with a handful of different powerplants and their representatives on hand. “We didn’t know what the response would be,” said Heintz, “and frankly we were blown away by the response. This year, all of last year’s exhibitors are returning, and we’re adding Continental and ECi, plus maybe a surprise or two.” This year, hours will be doubled. “A lot of people couldn’t make it in the morning last year,” said Heintz, “so we’re going on until 2p.m.”\rSo, on Thursday, August 1, at the Zenith exhibit at Airventure Oshkosh (space 641, in the North Aircraft Display area), Zenith Aircraft will again host “Engine Day,” where two-seat Zenith aircraft with all sorts of power will be on display, and where representatives of some of the most-popular engines, as well as some newcomers, will be helping builders decide what goes up front, between the prop and the rest of the airplane.\rThe Chris Heintz (CH-) Zenith designs have been built using everything from electric motors to small turbines, with two-strokes, four-strokes, and rotaries in between; many of these will be available, with their owners, as will some of the most-popular engine options and manufacturers, ranging from home-made and “factory” Corvair, VW, and Honda conversions, to industry-standard, purpose-built light aircraft engines – Rotax, Jabiru, UL Power (including their new six-cylinder engines), Continental, Lycoming, and more, from 65 to 150hp. \rThe Zenith designs have always been drawn with an eye to allowing alternate power sources. “Chris Heintz always kept the builder’s choice in mind, when designing owner-built aircraft,” Sebastien noted, with the result that “there are probably more different kinds and makes of aviation engines under Zenith cowls than any other. Plus,” he continued, “unlike some designers, Zenith Aircraft Company encourages builders to install the engine of their choice.” There are proven power systems always available, but the designs keep the door open to new ideas. Some work better than others, certainly, but the variety is astounding – “and it is a testimony to the versatility of both the designs and the builders that so many work, and so well.”\rZenith invites all to “Engine Day” at their exhibit in the North Aircraft Display Area # 641, specifically on Thursday, August 1, between 10a.m. and 2p.m., to meet the builders, engine representatives, and pilots of a great variety of Zenith machines, old and new.\rWhen: Thursday, August 1, 2013, 10a.m. until 2p.m.\rWhere: Zenith Aircraft Company exhibit (Space 641, North Aircraft Display area)\rWho: Builders, engine suppliers, pilots, prospects\r  More: www.zenithair.com  [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                },
                {
                    "id": 1282,
                    "category_id": 1,
                    "sponser_id": 1,
                    "title": "ATP announces the ATP® Aviation Hub",
                    "url": "",
                    "image": [
                        "uploads/ATP_Default.JPG"
                    ],
                    "publication_type_id": 1,
                    "key_word": "",
                    "is_active": 1,
                    "publish_date": "2021-04-12 00:00:00",
                    "is_headline": 0,
                    "details": "Brisbane, Calif., October 110, 2011 – ATP announced today the next evolution of ATP’s online services, the ATP® Aviation Hub. Delivered over the World Wide Web using the Software as a Service (SaaS) model, the ATP Aviation Hub is a powerful new application framework powered by the patented and industry leading ATP Navigator® technology.  Building on the successful April launch of ATP’s online library services, the Hub offers a wide array of valuable apps to empower users with new and valuable functionality.\r With the rapid escalation of technology and communication systems, aviation professionals, manufacturers and carriers are demanding new online solutions that mirror these advancements. The online ATP Aviation Hub is designed to deliver a vastly improved experience with integrated, online solutions that ensure consistent operational practices anywhere and on any device, including smart phones, netbooks, and tablets.\r With the launch of the ATP Aviation Hub customers will have access to:\r •\tThe Reference Library App – The industry’s first single-source online solution providing access to over 750 maintenance and regulatory libraries from over 50 manufacturers and agencies.\r•\tThe Profile and Compliance App – Effortlessly build a mandatory compliance and tracking report and record actions taken to insure the airworthiness of your aircraft.\r•\tThe Parts App – Improve the process for managing and fulfilling parts needs. This new workflow process streamlines part procurement and reduces transcription errors.\r•\tThe ICAPSM Safety and Compliance App – Reduce the recurring costs of associating manual content with compliance and conformance checklists and develop a Living Letter of Compliance.\r Additional ATP Aviation Hub Apps are also in development and will be announced in 2012 with the next versions of the ATP Aviation Hub\r “The ATP Aviation Hub changes the equation,” said Rich Marino, ATP President. “Now aviation professionals have a single, innovative point of entry to Apps that provide valuable information and knowledge services serving their safety mission. Customers can access their Apps anywhere, anytime, and anyway through a highly scalable and customizable online portal. We are leading the way in the technology revolution with innovative, trendsetting and unique technology services to meet the evolving needs of manufacturers, carriers, mechanics, schools and regulators worldwide.” \r [ home ]",
                    "created_at": "2021-04-13T11:36:41.000000Z",
                    "updated_at": "2021-04-13T11:36:41.000000Z",
                    "category": {
                        "id": 1,
                        "name": "All"
                    },
                    "sponsor": {
                        "id": 1,
                        "name": "Sankar Bera test",
                        "company_name": "Web Art Technology",
                        "email_id": "sankar@webart.technology",
                        "mobile_no": "6205630243",
                        "address": "India",
                        "url": "https://www.google.com/abc"
                    }
                }
            ],
            title: "News list",
            loaded: false,
            image: "",
            limit: 20,
        };
    }

    
    onDelete(contact_id) {
        axios
            .delete("/api/news/" + contact_id, {
                headers: {
                    Authorization: `${"ABCDEFGHIJK"}`,
                },
            })
            .then((response) => {
                axios
                    .get("/api/all-news/"+this.state.limit, {
                        headers: {
                            Authorization: `${"ABCDEFGHIJK"}`,
                        },
                    })
                    .then((response) => {
                        this.setState({ contact: response.data });
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        axios
            .get("/api/all-news/"+this.state.limit, {
                headers: {
                    Authorization: `${"ABCDEFGHIJK"}`,
                },
            })
            .then((response) => {    
                this.setState({ limit: this.state.limit + 20 }); 
                this.setState({ contact: response.data, loaded: true });
                console.log(this.state.contact)

            })
            .catch((error) => {
                console.error(error);
            });
    }

    
    showMore() {        
        axios
            .get("/api/all-news/"+this.state.limit, {
                headers: {
                    Authorization: `${"ABCDEFGHIJK"}`,
                },
            })
            .then((response) => {                
                this.setState({ limit: this.state.limit + 20 }); 
                this.setState({ contact: response.data, loaded: true });
            })
            .catch((error) => {

                console.error(error);
            });
    }

    render() {
        return (
            
            <Loader loaded={this.state.loaded}>
                <div className="app-content">
                    <div className="section">
                        <div className="page-header">
                            <h4 className="page-title">{this.state.title}</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link
                                        to="/author/dashboard"
                                        className="text-light-color"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    {this.state.title}
                                </li>
                            </ol>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>
                                            {this.state.title}
                                            <Link
                                                exact
                                                to="/author/news/add"
                                                className="btn btn-primary m-b-5 m-t-5 pull-right"
                                            >
                                                <i
                                                    className="fa fa-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </Link>
                                        </h4>
                                    </div>
                                    <div className="card-body">
                                        <span style={{ color: "green" }}>
                                            {this.props.location.state ?this.props.location.state.message:""}
                                        </span>

                                        <table
                                            id="customers2"
                                            className="table datatable"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>#ID</th>
                                                    <th>News</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.contact.map(
                                                    (row, index) => {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    {++index}
                                                                </td>
                                                                <td>
                                                                    <div className="left-box">
                                                                        <p>
                                                                            <b>
                                                                                Title
                                                                                :
                                                                            </b>{" "}
                                                                            {
                                                                                row.title
                                                                            }
                                                                        </p>
                                                                       
                                                                        <p>
                                                                            <b>
                                                                                Company
                                                                                Name
                                                                                :
                                                                            </b>{" "}
                                                                            {
                                                                                row
                                                                                    .sponsor
                                                                                    .company_name
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            <b>
                                                                                Details
                                                                                :
                                                                            </b>{" "}
                                                                            <div
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html: `${row.details.substring(
                                                                                        0,
                                                                                        220
                                                                                    )}`,
                                                                                }}
                                                                            ></div>
                                                                        </p>
                                                                        <p>
                                                                            <b>
                                                                                Publish
                                                                                Date
                                                                                :
                                                                            </b>
                                                                            {moment(
                                                                                row.publish_date
                                                                            ).format(
                                                                                "DD/MM/YYYY hh:mm a"
                                                                            )}
                                                                        </p>
                                                                        <p>
                                                                            <b>
                                                                                Status
                                                                                :
                                                                            </b>{" "}
                                                                            {row.is_active ==
                                                                            1 ? (
                                                                                <span
                                                                                    style={{
                                                                                        color:
                                                                                            "green",
                                                                                    }}
                                                                                >
                                                                                    <b>
                                                                                        Active
                                                                                    </b>
                                                                                </span>
                                                                            ) : (
                                                                                <span
                                                                                    style={{
                                                                                        color:
                                                                                            "red",
                                                                                    }}
                                                                                >
                                                                                    <b>
                                                                                        Inactive
                                                                                    </b>
                                                                                </span>
                                                                            )}
                                                                        </p>

                                                                        <p>
                                                                            <b>
                                                                                Show as a Headling
                                                                                :
                                                                            </b>{" "}
                                                                            {row.is_headline ==
                                                                            1 ? (
                                                                                <span
                                                                                    style={{
                                                                                        color:
                                                                                            "green",
                                                                                    }}
                                                                                >
                                                                                    <b>
                                                                                        Yes
                                                                                    </b>
                                                                                </span>
                                                                            ) : (
                                                                                <span
                                                                                    style={{
                                                                                        color:
                                                                                            "red",
                                                                                    }}
                                                                                >
                                                                                    <b>
                                                                                        No
                                                                                    </b>
                                                                                </span>
                                                                            )}
                                                                        </p>
                                                                    </div>
                                                                    <div className="right-box">
                                                                        {row.image.map(
                                                                            (
                                                                                img,
                                                                                i
                                                                            ) => {
                                                                                console.log(
                                                                                    "ROW Img: " +
                                                                                        JSON.stringify(
                                                                                            row.image
                                                                                        )
                                                                                );
                                                                                console.log(
                                                                                    img,
                                                                                    i
                                                                                );
                                                                                return (
                                                                                    <img
                                                                                        key={
                                                                                            i
                                                                                        }
                                                                                        src={
                                                                                            window
                                                                                                .location
                                                                                                .origin +
                                                                                            "/" +
                                                                                            img
                                                                                        }
                                                                                        height="50"
                                                                                        width="150"
                                                                                        style={{
                                                                                            paddingRight:
                                                                                                "10px",
                                                                                            paddingBottom:
                                                                                                "10px",
                                                                                        }}
                                                                                    />
                                                                                );
                                                                            }
                                                                        )}
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <Link
                                                                        exact
                                                                        to={
                                                                            "/author/news/edit/" +
                                                                            row.id
                                                                        }
                                                                    >
                                                                        <a href="javascript:void(0)">
                                                                            <i
                                                                                className="fa fa-pencil-square"
                                                                                aria-hidden="true"
                                                                            ></i>
                                                                        </a>
                                                                    </Link>{" "}
                                                                    |{" "}
                                                                    <a
                                                                        onClick={this.onDelete.bind(
                                                                            this,
                                                                            row.id
                                                                        )}
                                                                        href="javascript:void(0)"
                                                                    >
                                                                        <i
                                                                            className="fa fa-trash-o"
                                                                            aria-hidden="true"
                                                                        ></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                )}                                              
                                              

                                            </tbody>
                                        </table>
                                        <div className="d-flex justify-content-center">
                                                 <button onClick={this.showMore.bind(this)}>Show more</button>
                                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Loader>
       
       );
    }
}
