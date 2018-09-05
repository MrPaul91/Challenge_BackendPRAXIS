import { ApiModelProperty } from '@nestjs/swagger';

export class CreateNoteDto {

    @ApiModelProperty()
    readonly idUser: string;

    @ApiModelProperty()
    readonly text: string;

}


