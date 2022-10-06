import { customAxios } from "../../lib/axios";
import { ImageResponse } from "../../types/image/image.type";
import { postImageParams } from "./image.param";

class ImageRepository {
  public async postImage({ image }: postImageParams): Promise<ImageResponse> {
    const { data } = await customAxios.post("/images", image);
    return data;
  }
}

export default new ImageRepository();
