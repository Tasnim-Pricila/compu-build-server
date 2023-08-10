import { IUser } from './user.interface';
import { User } from './user.model';

export const getUserService = async (): Promise<IUser[] | null> => {
  const result = await User.find({})
    .populate('wishlist')
    .populate('completedBooks')
    .populate('currentlyReading');
  return result;
};

export const createUserService = async (
  payload: IUser
): Promise<IUser | null> => {
  const result = await User.create(payload);
  return result;
};

export const getUserByIdService = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

export const updateUserService = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};
