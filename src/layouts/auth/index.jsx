import Footer from "components/footer/FooterAuthDefault";
import authImg from "assets/img/auth/auth.png";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";

export default function Auth() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  document.documentElement.dir = "ltr";
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
        <FixedPlugin />
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-center items-center pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex items-center justify-center pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <Routes>
                  {getRoutes(routes)}
                  <Route
                    path="/"
                    element={<Navigate to="/auth/sign-in" replace />}
                  />
                </Routes>

              </div>
              {/* <Footer /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}



// import Footer from "components/footer/FooterAuthDefault";
// import authImg from "assets/img/auth/auth.png";
// import { Link, Routes, Route, Navigate } from "react-router-dom";
// import routes from "routes.js";
// import FixedPlugin from "components/fixedPlugin/FixedPlugin";

// export default function Auth() {
//   const getRoutes = (routes) => {
//     return routes.map((prop, key) => {
//       if (prop.layout === "/auth") {
//         return (
//           <Route path={`/${prop.path}`} element={prop.component} key={key} />
//         );
//       } else {
//         return null;
//       }
//     });
//   };
  
//   document.documentElement.dir = "ltr";
  
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="relative !bg-white dark:!bg-navy-900">
//         <FixedPlugin />
//         <main className={`mx-auto min-h-screen`}>
//           <div className="relative flex">
//             <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
//               <div className="mb-auto flex items-center justify-center pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
//                 <Routes>
//                   {getRoutes(routes)}
//                   <Route
//                     path="/"
//                     element={<Navigate to="/auth/sign-in" replace />}
//                   />
//                 </Routes>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
