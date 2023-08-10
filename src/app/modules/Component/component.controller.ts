import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';
import {
  createComponentService,
  getComponentByIdService,
  getComponentService,
  updateComponentByIdService,
} from './component.service';
import { IComponent } from './component.interface';

export const createComponent = catchAsync(
  async (req: Request, res: Response) => {
    const { ...ComponentData } = req.body;
    const result = await createComponentService(ComponentData);

    sendResponse<IComponent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Component created successfully',
      data: result,
    });
  }
);
export const getComponent = catchAsync(async (req: Request, res: Response) => {
  const result = await getComponentService();
  sendResponse<IComponent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Component data retieved successfully',
    data: result,
  });
});

export const getComponentById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await getComponentByIdService(id);

    sendResponse<IComponent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Component data retieved successfully',
      data: result,
    });
  }
);
export const deleteComponentById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await getComponentByIdService(id);

    sendResponse<IComponent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Component data deleted successfully',
      data: result,
    });
  }
);
export const updateComponentById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await updateComponentByIdService(id, req.body);

    sendResponse<IComponent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Component data deleted successfully',
      data: result,
    });
  }
);
