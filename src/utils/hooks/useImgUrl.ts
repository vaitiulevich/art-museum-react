import { ART_IMG_URL, ART_IMG_URL_POSTFIX } from '@constants/urls';

interface useImgUrlProps {
  id: string;
}

const useImgUrl = ({ id }: useImgUrlProps): string => {
  const urlImg = ART_IMG_URL + id + ART_IMG_URL_POSTFIX;
  return urlImg;
};

export default useImgUrl;
