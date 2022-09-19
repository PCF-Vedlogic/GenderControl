/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { IInputs, IOutputs } from './generated/ManifestTypes'
import MyReactComponent, { IMyReactComponentProps } from './Components/MyReactComponent'

export class PCFGenderControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private _value: string;
	private _notifyOutputChanged: () => void;
	private _context: ComponentFramework.Context<IInputs>;
	private _container: HTMLDivElement;
	private _gender: number
	private _props: IMyReactComponentProps = {
		gender: 0,
		onChange: function () { }
	}

	/**
	 * Empty constructor.
	 */
	constructor() {
	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
		this._context = context
		this._container = container
		this._props.gender = context.parameters.GenderValue.raw || 0
		this._notifyOutputChanged = notifyOutputChanged

		ReactDOM.render(
			React.createElement(MyReactComponent, {}),
			this._container
		)
	}

	notifyChange(value: number) {
		this._gender = value
		this._notifyOutputChanged()
	}

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		this._gender = context.parameters.GenderValue.raw || 0
		this._props.gender = context.parameters.GenderValue.raw || 0
		this._props.onChange = this.notifyChange.bind(this)
		ReactDOM.render(
			React.createElement(MyReactComponent, this._props),
			this._container
		)
	}

	/**
	 * It is called by the framework prior to a control receiving new data.
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		return { GenderValue: this._gender }
	}

	/**
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		ReactDOM.unmountComponentAtNode(this._container)
	}
}