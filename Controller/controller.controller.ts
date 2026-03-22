import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateControllerDto } from './dto/create-controller.dto';
import { UpdateControllerDto } from './dto/update-controller.dto';
import { ControllerService } from './controller.service';

@Controller('controllers')
export class ControllerController {
  constructor(private readonly controllerService: ControllerService) {}

  @Post()
  create(@Body() createControllerDto: CreateControllerDto) {
    return this.controllerService.create(createControllerDto);
  }

  @Get()
  findAll() {
    return this.controllerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controllerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControllerDto: UpdateControllerDto) {
    return this.controllerService.update(+id, updateControllerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controllerService.remove(+id);
  }
}
