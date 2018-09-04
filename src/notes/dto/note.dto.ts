import { ApiModelProperty } from '@nestjs/swagger';

export class CreateNoteDto {

    @ApiModelProperty()
    readonly userId: string;

    @ApiModelProperty()
    readonly text: string;

}


