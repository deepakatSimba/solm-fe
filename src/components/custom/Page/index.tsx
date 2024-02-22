import { ReactElement, ReactNode } from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface Breadcrumb {
  path?: string;
  icon?: ReactElement;
  name: string;
}

interface PageProps {
  title?: string;
  breadcrumbs?: Breadcrumb[];
  primaryAction?: ReactNode;
  children?: ReactNode;
}

const Page = ({ title, breadcrumbs, primaryAction, children }: PageProps) => {
  return (
    <div className="bg-white rounded-lg p-3 md:p-4 lg:p-[18x] xl:p-6 max-h-fit min-h-[90vh]">
      <div className="flex my-1">
        {/* breadcrumbs */}
        <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
          {breadcrumbs?.map((item: any, index: number) => (
            <>
              <li className="inline-flex items-center">
                <NavLink
                  to={item?.path ? item?.path : null}
                  className={({ isActive }) =>
                    `${
                      index === breadcrumbs?.length - 1 &&
                      isActive &&
                      "text-secondary"
                    } inline-flex items-center text-sm font-medium text-gray-700 hover:text-secondary cursor-pointer gap-1`
                  }
                >
                  {item?.icon}
                  {item?.name}
                </NavLink>
              </li>
              {index !== breadcrumbs.length - 1 && <FaAngleRight />}
            </>
          ))}
        </ol>
      </div>
      <div className="m-1 lg:m-2 xl:mx-3">
        <div className="flex justify-between my-2 lg:my-3">
          {/* main title */}
          <div className="text-secondary text-[22px] font-bold  leading-normal">
            {title}
          </div>
          {/* button */}
          {primaryAction && primaryAction}
        </div>
        {/* children */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Page;
