import { IComponent } from './component.interface';
import { Component } from './component.model';

export const createComponentService = async (
  payload: IComponent
): Promise<IComponent | null> => {
  const result = await Component.create(payload);
  return result;
};

export const getComponentService = async (): Promise<IComponent[] | null> => {
  const result = await Component.find({});
  return result;
};

export const getComponentByIdService = async (
  id: string
): Promise<IComponent | null> => {
  const result = await Component.findById(id);
  return result;
};

export const deleteComponentByIdService = async (
  id: string
): Promise<IComponent | null> => {
  const result = await Component.findByIdAndDelete(id);
  return result;
};
export const updateComponentByIdService = async (
  id: string,
  data: Partial<IComponent>
): Promise<IComponent | null> => {
  const result = await Component.findByIdAndUpdate(id, data, { new: true });
  return result;
};
