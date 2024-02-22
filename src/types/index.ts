import { UriEndPoint } from "../interface/index";

export interface EndPoint {
  [key: string]: UriEndPoint;
}

export interface queryProps {
  data: any;
  refetch?: any;
  isLoading?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  isStale?: boolean;
  isPending?: boolean;
}

export type mediaProps = {
  url: string;
  fileType: string;
  name: string;
};
