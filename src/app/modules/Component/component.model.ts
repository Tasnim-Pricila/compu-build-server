import { Schema, model } from 'mongoose';
import { IComponent } from './component.interface';

const componentSchema = new Schema<IComponent>(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['In Stock', 'Out of Stock'],
    },
    warranty: {
      type: Number,
      required: true,
    },
    KeyFeatures: {
      type: {
        brand: {
          type: String,
          required: true,
        },
        model: {
          type: String,
          required: true,
        },
        specification: String,
        port: String,
        type: String,
        resolution: String,
        voltage: String,
        clockSpeed: String,
        cache: String,
        cores: String,
        socket: String,
        threads: String,
        baseFrequency: String,
        maximumTurboFrequency: String,
        TDP: String,
        fanSpeed: String,
        fanAirflow: String,
        noise: String,
        airPressure: String,
        dimension: String,
        connector: String,
        weight: String,
        supported: String,
        supportedCPU: String,
        chipset: String,
        BIOS: String,
        formFactor: String,
        audio: String,
        slots: String,
        supportedMemory: String,
        supportedStorage: String,
        maximumMemory: String,
        graphics: String,
        maxSharedMemory: String,
        specialFeatures: String,
        USB: String,
        HDMI: String,
        capacity: String,
        frequency: String,
        latency: String,
        pin: String,
        continuousPower: String,
        efficiency: String,
        others: String,
        modularType: String,
        current: String,
        fanSize: String,
        CPU: String,
        floppy: String,
        PCI: String,
        mainPower: String,
        displaySize: String,
        displayType: String,
        panelType: String,
        pixelPitch: String,
        aspectRatio: String,
        viewingAngle: String,
        brightness: String,
        refreshRate: String,
        colorSupport: String,
        responseTime: String,
        speaker: String,
        VGA: String,
        color: String,
        powerConsumption: String,
      },
    },
    reviews: [
      {
        rating: {
          type: Number,
        },
        comment: {
          type: String,
        },
        userID: {
          // type: Schema.Types.ObjectId,
          type: String,
          // ref: 'User'
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Component = model<IComponent>('Component', componentSchema);
