import { ComponentBase } from '../../framework/ComponentBase';
import { ComponentConfigInterface } from '../../interfaces/ComponentConfigInterface';

class RowComponent extends ComponentBase {
	constructor(config: ComponentConfigInterface) {
		super(config)
	}

}

export const rowComponent = new RowComponent({
	className: 'rows',
	template: `
		<div class='row__headline'>
			<textarea type='text' maxlength='220' cols='22' rows = '1' class='row__text' placeholder='Enter card details' readonly></textarea>

			<div class='icons row__icons'>
				<img class='icon icon-pencil row__icon-pencil' src='/dist/img/pencil-svgrepo-com.svg'></img>
				<img class='icon icon-trash row__icon-trash' src='/dist/img/trash-2-svgrepo-com.svg'></img>
			</div>
		</div>

		<div class='error-element row__error'></div>
	`,
	elementPath: 'row',
	textareaPath: 'row__text',
	pencilPath: 'row__icon-pencil',
	pencilSrc: 'http://127.0.0.1:5500/dist/img/pencil-svgrepo-com.svg',
	checkSrc: 'http://127.0.0.1:5500/dist/img/check.svg',
	errorElementPath: 'row__error',
	textareaLineLength: 22,
	addElementPath: 'row__add',
	addElementText: '+ Add new row'
})