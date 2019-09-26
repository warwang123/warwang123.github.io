window.skins=window.skins||{};
window.CoverLayerSkin=window.CoverLayerSkin||{};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","MyWorksNode":"resource/ui/myWorks/MyWorksNode.exml","ComboBoxItemBase":"resource/eui_skins/ComboBoxItemBase.exml","LevelComboboxItems":"resource/ui/myWorks/LevelComboboxItems.exml","RankNode":"resource/ui/rank/RankNode.exml","ToolReadNode":"resource/ui/courseware/ToolReadNode.exml","ToolRecordNode":"resource/ui/courseware/ToolRecordNode.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ComboBoxItemBase.exml'] = window.ComboBoxItemBaseSkin = (function (_super) {
	__extends(ComboBoxItemBaseSkin, _super);
	function ComboBoxItemBaseSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ComboBoxItemBaseSkin.prototype;

	return ComboBoxItemBaseSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/ActionOptionSkin.exml'] = window.ActionOptionSkin = (function (_super) {
	__extends(ActionOptionSkin, _super);
	function ActionOptionSkin() {
		_super.call(this);
		this.skinParts = ["elementContainer"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.elementContainer_i()];
	}
	var _proto = ActionOptionSkin.prototype;

	_proto.elementContainer_i = function () {
		var t = new eui.Component();
		this.elementContainer = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	return ActionOptionSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/BaseMoveOptionSkin.exml'] = window.BaseMoveOptionSkin = (function (_super) {
	__extends(BaseMoveOptionSkin, _super);
	function BaseMoveOptionSkin() {
		_super.call(this);
		this.skinParts = ["elementContainer","activeBorder","resultRect","optionMask"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.elementContainer_i(),this.activeBorder_i(),this.resultRect_i(),this.optionMask_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("lock",
				[
					new eui.SetProperty("elementContainer","alpha",0.5),
					new eui.SetProperty("elementContainer","enabled",false)
				])
			,
			new eui.State ("enabled",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("compelete",
				[
				])
		];
	}
	var _proto = BaseMoveOptionSkin.prototype;

	_proto.elementContainer_i = function () {
		var t = new eui.Component();
		this.elementContainer = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.activeBorder_i = function () {
		var t = new eui.Image();
		this.activeBorder = t;
		t.scale9Grid = new egret.Rectangle(20,38,37,4);
		return t;
	};
	_proto.resultRect_i = function () {
		var t = new eui.Rect();
		this.resultRect = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.optionMask_i = function () {
		var t = new eui.Rect();
		this.optionMask = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	return BaseMoveOptionSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/BaseOptionSkin.exml'] = window.BaseOptionSkin = (function (_super) {
	__extends(BaseOptionSkin, _super);
	function BaseOptionSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = BaseOptionSkin.prototype;

	return BaseOptionSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/ChoiceOptionSkin.exml'] = window.ChoiceOptionSkin = (function (_super) {
	__extends(ChoiceOptionSkin, _super);
	function ChoiceOptionSkin() {
		_super.call(this);
		this.skinParts = ["elementContainer","activeBorder","resultRect","optionMask"];
		
		this.elementsContent = [this.elementContainer_i(),this.activeBorder_i(),this.resultRect_i(),this.optionMask_i()];
		this.states = [
			new eui.State ("lock",
				[
					new eui.SetProperty("elementContainer","alpha",0.3),
					new eui.SetProperty("elementContainer","enabled",false),
					new eui.SetProperty("activeBorder","source","")
				])
			,
			new eui.State ("enabled",
				[
					new eui.SetProperty("activeBorder","source","Group")
				])
			,
			new eui.State ("right",
				[
					new eui.SetProperty("activeBorder","source","Group 3"),
					new eui.SetProperty("activeBorder","visible",true)
				])
			,
			new eui.State ("error",
				[
					new eui.SetProperty("activeBorder","source","Group 2"),
					new eui.SetProperty("activeBorder","visible",true)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ChoiceOptionSkin.prototype;

	_proto.elementContainer_i = function () {
		var t = new eui.Component();
		this.elementContainer = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.activeBorder_i = function () {
		var t = new eui.Image();
		this.activeBorder = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.scale9Grid = new egret.Rectangle(14,14,13,13);
		t.visible = false;
		return t;
	};
	_proto.resultRect_i = function () {
		var t = new eui.Rect();
		this.resultRect = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.optionMask_i = function () {
		var t = new eui.Rect();
		this.optionMask = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	return ChoiceOptionSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/ClockSkin.exml'] = window.ClockSkin = (function (_super) {
	__extends(ClockSkin, _super);
	function ClockSkin() {
		_super.call(this);
		this.skinParts = ["bg","progress","bgCircle","group","point"];
		
		this.elementsContent = [this.bg_i(),this.progress_i(),this.bgCircle_i(),this.group_i(),this._Rect1_i(),this.point_i()];
	}
	var _proto = ClockSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.ellipseWidth = 68;
		t.fillColor = 0xd5dbe6;
		t.height = 68;
		t.width = 68;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Rect();
		this.progress = t;
		t.ellipseWidth = 68;
		t.fillColor = 0xff9500;
		t.height = 68;
		t.width = 68;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bgCircle_i = function () {
		var t = new eui.Rect();
		this.bgCircle = t;
		t.ellipseWidth = 68;
		t.fillColor = 0xffffff;
		t.height = 54;
		t.width = 54;
		t.x = 7;
		t.y = 7;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 68;
		t.width = 68;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 4;
		t.anchorOffsetY = 25;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xffcc00;
		t.height = 24;
		t.width = 8;
		t.x = 34;
		t.y = 36;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.Rect();
		this.point = t;
		t.anchorOffsetX = 4;
		t.anchorOffsetY = 23;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xff9500;
		t.height = 24;
		t.width = 8;
		t.x = 34;
		t.y = 34;
		return t;
	};
	return ClockSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/CoursewareLayerSkin.exml'] = window.$exmlClass1 = (function (_super) {
	__extends($exmlClass1, _super);
	function $exmlClass1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = $exmlClass1.prototype;

	return $exmlClass1;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/PollOptionSkin.exml'] = window.PollOptionSkin = (function (_super) {
	__extends(PollOptionSkin, _super);
	function PollOptionSkin() {
		_super.call(this);
		this.skinParts = ["elementContainer","flag","progressbg","progressmask","progress","label","progressbar","add"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.elementContainer_i(),this.flag_i(),this.progressbar_i(),this.add_i()];
		this.states = [
			new eui.State ("lock",
				[
					new eui.SetProperty("elementContainer","alpha",0.5),
					new eui.SetProperty("elementContainer","enabled",false)
				])
			,
			new eui.State ("enabled",
				[
					new eui.SetProperty("flag","source","")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("flag","source","")
				])
		];
	}
	var _proto = PollOptionSkin.prototype;

	_proto.elementContainer_i = function () {
		var t = new eui.Component();
		this.elementContainer = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.flag_i = function () {
		var t = new eui.Image();
		this.flag = t;
		t.left = 16;
		t.source = "lock";
		t.top = 16;
		return t;
	};
	_proto.progressbar_i = function () {
		var t = new eui.Group();
		this.progressbar = t;
		t.bottom = 20;
		t.left = 13;
		t.percentWidth = 100;
		t.right = 20;
		t.y = 242;
		t.elementsContent = [this.progressbg_i(),this.progressmask_i(),this.progress_i(),this.label_i()];
		return t;
	};
	_proto.progressbg_i = function () {
		var t = new eui.Rect();
		this.progressbg = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xd8d8d8;
		t.height = 24;
		t.percentWidth = 100;
		return t;
	};
	_proto.progressmask_i = function () {
		var t = new eui.Rect();
		this.progressmask = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 24;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Rect();
		this.progress = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xff6d52;
		t.height = 24;
		t.percentWidth = 100;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.fontFamily = "Sassoon";
		t.percentWidth = 100;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.x = 0;
		return t;
	};
	_proto.add_i = function () {
		var t = new eui.Image();
		this.add = t;
		t.source = "pic score";
		t.visible = false;
		return t;
	};
	return PollOptionSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/Quiz.exml'] = window.QuizSkin = (function (_super) {
	__extends(QuizSkin, _super);
	function QuizSkin() {
		_super.call(this);
		this.skinParts = ["container","containerMask","_ms","phoneContainer","$content"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.$content_i()];
	}
	var _proto = QuizSkin.prototype;

	_proto.$content_i = function () {
		var t = new eui.Group();
		this.$content = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.container_i(),this.containerMask_i(),this._ms_i(),this.phoneContainer_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x750000;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.height = 640;
		t.name = "quizGroup";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1280;
		t.x = 27;
		t.y = 55;
		return t;
	};
	_proto.containerMask_i = function () {
		var t = new eui.Rect();
		this.containerMask = t;
		t.ellipseWidth = 30;
		t.height = 640;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1280;
		t.x = 27;
		t.y = 55;
		return t;
	};
	_proto._ms_i = function () {
		var t = new eui.Image();
		this._ms = t;
		t.height = 640;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "read_json.shadow";
		t.x = 607;
		t.y = 55;
		return t;
	};
	_proto.phoneContainer_i = function () {
		var t = new eui.Component();
		this.phoneContainer = t;
		t.bottom = 60;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 372;
		t.y = 614;
		return t;
	};
	return QuizSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/RecordBarSkin.exml'] = window.RecordBarSkin = (function (_super) {
	__extends(RecordBarSkin, _super);
	function RecordBarSkin() {
		_super.call(this);
		this.skinParts = ["recordingGroup","recordBtn","recordPlay","resetBtn","tooltipLabel","tooltip"];
		
		this.height = 120;
		this.width = 1280;
		this.elementsContent = [this.recordBtn_i(),this.recordPlay_i(),this.resetBtn_i(),this.tooltip_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("recoding",
				[
					new eui.SetProperty("_Image1","visible",false),
					new eui.SetProperty("recordingGroup","visible",true)
				])
			,
			new eui.State ("read",
				[
					new eui.SetProperty("recordBtn","visible",false),
					new eui.SetProperty("recordPlay","visible",false),
					new eui.SetProperty("resetBtn","visible",true)
				])
		];
	}
	var _proto = RecordBarSkin.prototype;

	_proto.recordBtn_i = function () {
		var t = new eui.Group();
		this.recordBtn = t;
		t.horizontalCenter = 0;
		t.y = 80;
		t.elementsContent = [this._Image1_i(),this.recordingGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "read_record_json.Group 8 Copy";
		t.visible = true;
		return t;
	};
	_proto.recordingGroup_i = function () {
		var t = new eui.Group();
		this.recordingGroup = t;
		t.visible = false;
		return t;
	};
	_proto.recordPlay_i = function () {
		var t = new eui.Image();
		this.recordPlay = t;
		t.source = "read_record_json.read_playback_not";
		t.x = 738;
		t.y = 114;
		return t;
	};
	_proto.resetBtn_i = function () {
		var t = new eui.Image();
		this.resetBtn = t;
		t.right = 30;
		t.source = "read_record_json.read_record_again";
		t.verticalCenter = 145;
		return t;
	};
	_proto.tooltip_i = function () {
		var t = new eui.Group();
		this.tooltip = t;
		t.height = 48;
		t.horizontalCenter = 0;
		t.width = 232;
		t.y = 10;
		t.elementsContent = [this._Rect1_i(),this.tooltipLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.6;
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0x000000;
		t.height = 50;
		t.percentWidth = 100;
		return t;
	};
	_proto.tooltipLabel_i = function () {
		var t = new eui.Label();
		this.tooltipLabel = t;
		t.percentWidth = 100;
		t.size = 24;
		t.text = "录音上传中...";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	return RecordBarSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/SceneOptionSkin.exml'] = window.SceneOptionSkin = (function (_super) {
	__extends(SceneOptionSkin, _super);
	function SceneOptionSkin() {
		_super.call(this);
		this.skinParts = ["elementContainer","flag"];
		
		this.elementsContent = [this.elementContainer_i(),this.flag_i()];
		this.states = [
			new eui.State ("enabled",
				[
					new eui.SetProperty("flag","source","")
				])
			,
			new eui.State ("right",
				[
					new eui.SetProperty("flag","source","right")
				])
			,
			new eui.State ("error",
				[
					new eui.SetProperty("flag","source","error")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("flag","source","")
				])
		];
	}
	var _proto = SceneOptionSkin.prototype;

	_proto.elementContainer_i = function () {
		var t = new eui.Component();
		this.elementContainer = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.flag_i = function () {
		var t = new eui.Image();
		this.flag = t;
		t.left = 0;
		t.top = 0;
		return t;
	};
	return SceneOptionSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/ToolBar.exml'] = window.ToolBar = (function (_super) {
	__extends(ToolBar, _super);
	function ToolBar() {
		_super.call(this);
		this.skinParts = ["_bg","_btnVG1","_readTxt","_readSl","_readLs","_readG","_btnVG","_recordTxt","_recordSl","_recordLs","_rT","_rBtn","_effectG","_rmask","_btnG","_btnP","_socreTxt","_scoreG","_playG","_tooltipLabel","_tooltip","_rB","_recordG"];
		
		this.height = 156;
		this.width = 1280;
		this.elementsContent = [this._bg_i(),this._readG_i(),this._recordG_i()];
	}
	var _proto = ToolBar.prototype;

	_proto._bg_i = function () {
		var t = new eui.Rect();
		this._bg = t;
		t.fillColor = 0xf6f6f6;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._readG_i = function () {
		var t = new eui.Group();
		this._readG = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._btnVG1_i(),this._readTxt_i(),this._readSl_i(),this._readLs_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(130,19,785,118);
		t.source = "read_page_img_turning_png";
		t.top = 0;
		return t;
	};
	_proto._btnVG1_i = function () {
		var t = new eui.Group();
		this._btnVG1 = t;
		t.height = 88;
		t.width = 88;
		t.x = 24;
		t.y = 38;
		return t;
	};
	_proto._readTxt_i = function () {
		var t = new eui.Label();
		this._readTxt = t;
		t.anchorOffsetX = 0;
		t.height = 88;
		t.lineSpacing = 10;
		t.size = 30;
		t.text = "He learned to wipe cat food off his whiskers after lunch, and he learned to purr when he said ";
		t.textColor = 0x333333;
		t.visible = false;
		t.width = 1055;
		t.x = 120;
		t.y = 26;
		return t;
	};
	_proto._readSl_i = function () {
		var t = new eui.Scroller();
		this._readSl = t;
		t.anchorOffsetX = 0;
		t.height = 108;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1110;
		t.x = 120;
		t.y = 24;
		return t;
	};
	_proto._readLs_i = function () {
		var t = new eui.List();
		this._readLs = t;
		t.anchorOffsetX = 0;
		t.height = 108;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1110;
		t.x = 120;
		t.y = 24;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._recordG_i = function () {
		var t = new eui.Group();
		this._recordG = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rT_i(),this._rB_i()];
		return t;
	};
	_proto._rT_i = function () {
		var t = new eui.Group();
		this._rT = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._btnVG_i(),this._recordTxt_i(),this._recordSl_i(),this._recordLs_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(130,19,785,118);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_img_turning_png";
		t.top = 0;
		t.width = 1030;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btnVG_i = function () {
		var t = new eui.Group();
		this._btnVG = t;
		t.height = 88;
		t.width = 88;
		t.x = 24;
		t.y = 34;
		return t;
	};
	_proto._recordTxt_i = function () {
		var t = new eui.Label();
		this._recordTxt = t;
		t.anchorOffsetX = 0;
		t.height = 88;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "He learned to wipe cat food off his whiskers after lunch, and he learned to purr when he said ";
		t.textColor = 0x333333;
		t.visible = false;
		t.width = 842;
		t.x = 120;
		t.y = 26;
		return t;
	};
	_proto._recordSl_i = function () {
		var t = new eui.Scroller();
		this._recordSl = t;
		t.height = 108;
		t.width = 842;
		t.x = 128;
		t.y = 16;
		return t;
	};
	_proto._recordLs_i = function () {
		var t = new eui.List();
		this._recordLs = t;
		t.height = 108;
		t.width = 842;
		t.x = 128;
		t.y = 16;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._rB_i = function () {
		var t = new eui.Group();
		this._rB = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 148.48;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 272.73;
		t.x = 1009.27;
		t.y = 4;
		t.elementsContent = [this._Image3_i(),this._btnG_i(),this._playG_i(),this._tooltip_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "toolbar_json.page_icon_unplay";
		t.x = -2;
		t.y = 18;
		return t;
	};
	_proto._btnG_i = function () {
		var t = new eui.Group();
		this._btnG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 148;
		t.width = 148;
		t.x = 121.12;
		t.y = 3.23;
		t.elementsContent = [this._rBtn_i(),this._effectG_i(),this._rmask_i()];
		return t;
	};
	_proto._rBtn_i = function () {
		var t = new eui.Image();
		this._rBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "toolbar_json.page_icon_replay";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._effectG_i = function () {
		var t = new eui.Group();
		this._effectG = t;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._rmask_i = function () {
		var t = new eui.Image();
		this._rmask = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "toolbar_json.page_icon_replay";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._playG_i = function () {
		var t = new eui.Group();
		this._playG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115.5;
		t.width = 121.5;
		t.x = 5.5;
		t.y = 19.48;
		t.elementsContent = [this._btnP_i(),this._scoreG_i()];
		return t;
	};
	_proto._btnP_i = function () {
		var t = new eui.Image();
		this._btnP = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "toolbar_json.page_icon_play";
		t.x = -5.5;
		t.y = 1.5199999999999996;
		return t;
	};
	_proto._scoreG_i = function () {
		var t = new eui.Group();
		this._scoreG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.width = 71;
		t.x = 48.81;
		t.y = 0.34;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._socreTxt_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(19,13,29,7);
		t.source = "others_json.btn_score";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "toolbar_json.page_icon_score";
		t.x = 6.27;
		t.y = 4.56;
		return t;
	};
	_proto._socreTxt_i = function () {
		var t = new eui.Label();
		this._socreTxt = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "100";
		t.textAlign = "center";
		t.width = 41.29;
		t.x = 25.15;
		t.y = 5.52;
		return t;
	};
	_proto._tooltip_i = function () {
		var t = new eui.Group();
		this._tooltip = t;
		t.height = 48;
		t.horizontalCenter = -0.3650000000000091;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 232;
		t.x = -507.0000000000002;
		t.y = -53;
		t.elementsContent = [this._Rect1_i(),this._tooltipLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.6;
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0x000000;
		t.height = 50;
		t.percentWidth = 100;
		return t;
	};
	_proto._tooltipLabel_i = function () {
		var t = new eui.Label();
		this._tooltipLabel = t;
		t.percentWidth = 100;
		t.size = 24;
		t.text = "录音上传中...";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	return ToolBar;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/ToolReadNode.exml'] = window.ToolReadNodeSkin = (function (_super) {
	__extends(ToolReadNodeSkin, _super);
	function ToolReadNodeSkin() {
		_super.call(this);
		this.skinParts = ["_readTxt","_readTxtLight","_readTxtMask"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._readTxt_i(),this._readTxtLight_i(),this._readTxtMask_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ToolReadNodeSkin.prototype;

	_proto._readTxt_i = function () {
		var t = new eui.Label();
		this._readTxt = t;
		t.anchorOffsetX = 0;
		t.height = 108;
		t.lineSpacing = 10;
		t.size = 30;
		t.text = "\"Bonk is bragging. \"I know how to swim,\" he says. \"I swam across the ocean.\" ";
		t.textColor = 0x333333;
		t.width = 1110;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._readTxtLight_i = function () {
		var t = new eui.Label();
		this._readTxtLight = t;
		t.anchorOffsetX = 0;
		t.height = 98;
		t.lineSpacing = 10;
		t.size = 30;
		t.text = "\"Bonk is bragging. \"I know how to swim,\" he says. \"I swam across the ocean.\" ";
		t.textColor = 0xffc835;
		t.visible = false;
		t.width = 1110;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._readTxtMask_i = function () {
		var t = new eui.Rect();
		this._readTxtMask = t;
		t.height = 20;
		t.visible = false;
		t.width = 20;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ToolReadNodeSkin;
})(eui.Skin);generateEUI.paths['resource/ui/courseware/ToolRecordNode.exml'] = window.ToolRecordNodeSkin = (function (_super) {
	__extends(ToolRecordNodeSkin, _super);
	function ToolRecordNodeSkin() {
		_super.call(this);
		this.skinParts = ["_recordTxt"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._recordTxt_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ToolRecordNodeSkin.prototype;

	_proto._recordTxt_i = function () {
		var t = new eui.Label();
		this._recordTxt = t;
		t.anchorOffsetX = 0;
		t.height = 108;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "He learned to wipe cat food off his whiskers after lunch, and he learned to purr when he said ";
		t.textColor = 0x333333;
		t.width = 842;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ToolRecordNodeSkin;
})(eui.Skin);generateEUI.paths['resource/ui/coverlayer/CoverLayerSkin.exml'] = window.CoverLayerSkin.exml = (function (_super) {
	__extends(exml, _super);
	var exml$Skin2 = 	(function (_super) {
		__extends(exml$Skin2, _super);
		function exml$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","others_json.read_icon_ranking")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","others_json.read_icon_ranking")
					])
			];
		}
		var _proto = exml$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "others_json.read_icon_ranking";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return exml$Skin2;
	})(eui.Skin);

	var exml$Skin3 = 	(function (_super) {
		__extends(exml$Skin3, _super);
		function exml$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","others_json.read_icon_share")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","others_json.read_icon_share")
					])
			];
		}
		var _proto = exml$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "others_json.read_icon_share";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return exml$Skin3;
	})(eui.Skin);

	function exml() {
		_super.call(this);
		this.skinParts = ["coverImg","coverMask","progressLabel","vbook","readName","type","minute","times","leve","startBtn","recordComplete","recordBtn","recordComplete1","_my","_read1","_other","_mainContent","grp_pop","_btnRank","_btnShare","$content"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.$content_i()];
		this.states = [
			new eui.State ("scale",
				[
				])
		];
	}
	var _proto = exml.prototype;

	_proto.$content_i = function () {
		var t = new eui.Group();
		this.$content = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._mainContent_i(),this.grp_pop_i(),this._btnRank_i(),this._btnShare_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xF4F5F8;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._mainContent_i = function () {
		var t = new eui.Group();
		this._mainContent = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this.vbook_i(),this.readName_i(),this.type_i(),this.minute_i(),this.times_i(),this.leve_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._my_i(),this._other_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "rank_json.read_img_bookshelf";
		t.width = 1114;
		t.x = 88;
		t.y = 474;
		return t;
	};
	_proto.vbook_i = function () {
		var t = new eui.Group();
		this.vbook = t;
		t.y = 8.4;
		t.elementsContent = [this._Image2_i(),this.coverImg_i(),this.coverMask_i(),this._Image3_i(),this.progressLabel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 384;
		t.source = "read_json.book";
		t.width = 318;
		t.x = 214;
		t.y = 186;
		return t;
	};
	_proto.coverImg_i = function () {
		var t = new eui.Image();
		this.coverImg = t;
		t.height = 384;
		t.width = 300;
		t.x = 214;
		t.y = 186;
		return t;
	};
	_proto.coverMask_i = function () {
		var t = new eui.Image();
		this.coverMask = t;
		t.source = "read_json.mask";
		t.x = 214;
		t.y = 186;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "read_json. backbone";
		t.x = 214;
		t.y = 186;
		return t;
	};
	_proto.progressLabel_i = function () {
		var t = new eui.Label();
		this.progressLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Arial";
		t.height = 48;
		t.size = 28;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFfff;
		t.touchEnabled = false;
		t.width = 230;
		t.x = 254;
		t.y = 405;
		return t;
	};
	_proto.readName_i = function () {
		var t = new eui.Label();
		this.readName = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "SpeakBooseTraBold";
		t.height = 79;
		t.size = 48;
		t.text = "Hooray for Fish!";
		t.textAlign = "center";
		t.textColor = 0x666666;
		t.width = 1000;
		t.x = 140;
		t.y = 68.13;
		return t;
	};
	_proto.type_i = function () {
		var t = new eui.Label();
		this.type = t;
		t.height = 36;
		t.size = 24;
		t.text = "阅读类别： ";
		t.textColor = 0xffaa00;
		t.verticalAlign = "middle";
		t.x = 640;
		t.y = 318.4;
		return t;
	};
	_proto.minute_i = function () {
		var t = new eui.Label();
		this.minute = t;
		t.height = 36;
		t.size = 24;
		t.text = "阅读时间： 分钟";
		t.textColor = 0xffaa00;
		t.verticalAlign = "middle";
		t.x = 981;
		t.y = 256.4;
		return t;
	};
	_proto.times_i = function () {
		var t = new eui.Label();
		this.times = t;
		t.height = 36;
		t.size = 24;
		t.text = "阅读次数： 次";
		t.textColor = 0xffaa00;
		t.verticalAlign = "middle";
		t.x = 981;
		t.y = 318.4;
		return t;
	};
	_proto.leve_i = function () {
		var t = new eui.Label();
		this.leve = t;
		t.height = 36;
		t.size = 24;
		t.text = "阅读级别： Leve1";
		t.textColor = 0xffaa00;
		t.verticalAlign = "middle";
		t.x = 640;
		t.y = 256.4;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "read_json.level";
		t.x = 588;
		t.y = 256.4;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "read_json.time";
		t.x = 931;
		t.y = 256.4;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "read_json.classes";
		t.x = 590;
		t.y = 318.4;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "read_record_json.img_number";
		t.x = 932;
		t.y = 318.4;
		return t;
	};
	_proto._my_i = function () {
		var t = new eui.Group();
		this._my = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107.58;
		t.width = 592.43;
		t.x = 588;
		t.y = 402;
		t.elementsContent = [this.startBtn_i(),this.recordComplete_i(),this.recordBtn_i(),this.recordComplete1_i()];
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Image();
		this.startBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "read_record_json.read_btn";
		t.x = 161;
		t.y = 6.399999999999977;
		return t;
	};
	_proto.recordComplete_i = function () {
		var t = new eui.Image();
		this.recordComplete = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 376;
		t.y = -17.599999999999966;
		return t;
	};
	_proto.recordBtn_i = function () {
		var t = new eui.Image();
		this.recordBtn = t;
		t.height = 96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "read_record_json.record_btn";
		t.width = 264;
		t.x = 314.0000000000001;
		t.y = 6.399999999999977;
		return t;
	};
	_proto.recordComplete1_i = function () {
		var t = new eui.Image();
		this.recordComplete1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 529;
		t.y = -17.599999999999966;
		return t;
	};
	_proto._other_i = function () {
		var t = new eui.Group();
		this._other = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107.58;
		t.width = 592.43;
		t.x = 588;
		t.y = 402;
		t.elementsContent = [this._read1_i()];
		return t;
	};
	_proto._read1_i = function () {
		var t = new eui.Image();
		this._read1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "others_json.read_btn_dub";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_pop_i = function () {
		var t = new eui.Group();
		this.grp_pop = t;
		t.height = 128;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 678;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillAlpha = 0.86;
		t.fillColor = 0x444444;
		t.height = 128;
		t.width = 678;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 54;
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "资源暂未开放哦，请耐心等待";
		t.textColor = 0xf2f2f2;
		t.verticalCenter = 0;
		t.width = 568;
		return t;
	};
	_proto._btnRank_i = function () {
		var t = new eui.Button();
		this._btnRank = t;
		t.label = "";
		t.right = 20;
		t.top = 30;
		t.touchEnabled = true;
		t.skinName = exml$Skin2;
		return t;
	};
	_proto._btnShare_i = function () {
		var t = new eui.Button();
		this._btnShare = t;
		t.label = "";
		t.right = 152;
		t.top = 30;
		t.touchEnabled = true;
		t.skinName = exml$Skin3;
		return t;
	};
	return exml;
})(eui.Skin);generateEUI.paths['resource/ui/coverlayer/ScorePageSkin.exml'] = window.ScorePageSkin = (function (_super) {
	__extends(ScorePageSkin, _super);
	function ScorePageSkin() {
		_super.call(this);
		this.skinParts = ["container","_pandG","greetLabel","starsBar","_backMyWorks","_replay","_myWorksEnd","_shareRead","_shareRecord","_shareEnd","_readRecordBtn","_restartBtn","_readEnd","_mainContent","$content"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.$content_i()];
		this.states = [
			new eui.State ("scale",
				[
				])
		];
	}
	var _proto = ScorePageSkin.prototype;

	_proto.$content_i = function () {
		var t = new eui.Group();
		this.$content = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.container_i(),this._mainContent_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "read_record_json.read-bg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._mainContent_i = function () {
		var t = new eui.Group();
		this._mainContent = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._pandG_i(),this.greetLabel_i(),this.starsBar_i(),this._myWorksEnd_i(),this._shareEnd_i(),this._readEnd_i()];
		return t;
	};
	_proto._pandG_i = function () {
		var t = new eui.Group();
		this._pandG = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 640;
		t.y = 360.00000000000006;
		return t;
	};
	_proto.greetLabel_i = function () {
		var t = new eui.Label();
		this.greetLabel = t;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "真厉害，你已阅读完一本绘本啦！";
		t.x = 370;
		t.y = 139;
		return t;
	};
	_proto.starsBar_i = function () {
		var t = new StarsBar();
		this.starsBar = t;
		t.horizontalCenter = 0;
		t.y = 31;
		return t;
	};
	_proto._myWorksEnd_i = function () {
		var t = new eui.Group();
		this._myWorksEnd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 50;
		t.height = 100;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 619;
		t.elementsContent = [this._backMyWorks_i(),this._replay_i()];
		return t;
	};
	_proto._backMyWorks_i = function () {
		var t = new eui.Image();
		this._backMyWorks = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "others_json.finish_btn_back";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._replay_i = function () {
		var t = new eui.Image();
		this._replay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "others_json.finish_btn_replay";
		t.x = 349.78;
		t.y = 4;
		return t;
	};
	_proto._shareEnd_i = function () {
		var t = new eui.Group();
		this._shareEnd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 50;
		t.height = 100;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 657;
		t.elementsContent = [this._shareRead_i(),this._shareRecord_i()];
		return t;
	};
	_proto._shareRead_i = function () {
		var t = new eui.Image();
		this._shareRead = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "others_json.finish_btn_read";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._shareRecord_i = function () {
		var t = new eui.Image();
		this._shareRecord = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "others_json.finish_btn_dub";
		t.x = 349.78;
		t.y = 4;
		return t;
	};
	_proto._readEnd_i = function () {
		var t = new eui.Group();
		this._readEnd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 50;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 619;
		t.elementsContent = [this._readRecordBtn_i(),this._restartBtn_i()];
		return t;
	};
	_proto._readRecordBtn_i = function () {
		var t = new eui.Image();
		this._readRecordBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "read_record_json.record_btn2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._restartBtn_i = function () {
		var t = new eui.Image();
		this._restartBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "read_record_json.read_replay_btn";
		t.width = 269.22;
		t.x = 350;
		t.y = 4;
		return t;
	};
	return ScorePageSkin;
})(eui.Skin);generateEUI.paths['resource/ui/coverlayer/SharePageSkin.exml'] = window.SharePageSkin = (function (_super) {
	__extends(SharePageSkin, _super);
	function SharePageSkin() {
		_super.call(this);
		this.skinParts = ["avator","userName","starsBar","starsGroup","coverImg","coverMask","vbook","container","_ani","recordPlayBtn","finishBtn","shareBtn","scoreGroup","goonRecordBtn","goonGroup","$content"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.$content_i()];
		this.states = [
			new eui.State ("scale",
				[
				])
		];
	}
	var _proto = SharePageSkin.prototype;

	_proto.$content_i = function () {
		var t = new eui.Group();
		this.$content = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.scoreGroup_i(),this.goonGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "read_record_json.read-bg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scoreGroup_i = function () {
		var t = new eui.Group();
		this.scoreGroup = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Image2_i(),this.avator_i(),this.userName_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.starsBar_i(),this.starsGroup_i(),this.vbook_i(),this.container_i(),this._ani_i(),this.recordPlayBtn_i(),this.finishBtn_i(),this.shareBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0xFFFFFF;
		t.height = 475;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 460;
		t.y = 95;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE1E1E1;
		t.height = 2;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 400;
		t.x = 444;
		t.y = 467.73;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 62;
		t.source = "read_record_json.read_img_belt";
		t.visible = false;
		t.width = 252;
		t.x = 520;
		t.y = 80;
		return t;
	};
	_proto.avator_i = function () {
		var t = new Avator();
		this.avator = t;
		t.radius = 84;
		t.visible = false;
		t.x = 600;
		t.y = 43;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.Label();
		this.userName = t;
		t.horizontalCenter = 0;
		t.text = "挂小宝";
		t.textColor = 0x000;
		t.visible = false;
		t.y = 138;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "read_record_json.read_star_gray";
		t.visible = false;
		t.x = 548;
		t.y = 490;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "read_record_json.read_star_gray";
		t.visible = false;
		t.x = 618;
		t.y = 490;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "read_record_json.read_star_gray";
		t.visible = false;
		t.x = 688;
		t.y = 490;
		return t;
	};
	_proto.starsBar_i = function () {
		var t = new StarsBar();
		this.starsBar = t;
		t.horizontalCenter = 0;
		t.y = 31;
		return t;
	};
	_proto.starsGroup_i = function () {
		var t = new eui.Group();
		this.starsGroup = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.vbook_i = function () {
		var t = new eui.Group();
		this.vbook = t;
		t.height = 384;
		t.horizontalCenter = 8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 318;
		t.elementsContent = [this._Image6_i(),this.coverImg_i(),this.coverMask_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 384;
		t.source = "read_json.book";
		t.width = 318;
		return t;
	};
	_proto.coverImg_i = function () {
		var t = new eui.Image();
		this.coverImg = t;
		t.height = 384;
		t.width = 300;
		return t;
	};
	_proto.coverMask_i = function () {
		var t = new eui.Image();
		this.coverMask = t;
		t.height = 384;
		t.source = "read_json.mask";
		t.width = 300;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 384;
		t.source = "read_json. backbone";
		t.width = 42;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.y = 0;
		return t;
	};
	_proto._ani_i = function () {
		var t = new eui.Group();
		this._ani = t;
		t.bottom = 5;
		t.x = 0;
		return t;
	};
	_proto.recordPlayBtn_i = function () {
		var t = new eui.Image();
		this.recordPlayBtn = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "read_record_json.read_icon_play";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.finishBtn_i = function () {
		var t = new eui.Image();
		this.finishBtn = t;
		t.left = 360;
		t.source = "read_record_json.record_finish";
		t.y = 597;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Image();
		this.shareBtn = t;
		t.right = 360;
		t.source = "read_record_json.read_share";
		t.y = 597;
		return t;
	};
	_proto.goonGroup_i = function () {
		var t = new eui.Group();
		this.goonGroup = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._Label1_i(),this.goonRecordBtn_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "read_record_json.star";
		t.top = 100;
		t.x = 292;
		t.y = 141;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "配完绘本能登上排行榜哦！";
		t.top = 397;
		return t;
	};
	_proto.goonRecordBtn_i = function () {
		var t = new eui.Image();
		this.goonRecordBtn = t;
		t.bottom = 50;
		t.horizontalCenter = 0;
		t.source = "read_record_json.keep_dub";
		t.x = 350;
		t.y = 435;
		return t;
	};
	return SharePageSkin;
})(eui.Skin);generateEUI.paths['resource/ui/coverlayer/SharePopupPageSkin.exml'] = window.SharePopupPageSkin = (function (_super) {
	__extends(SharePopupPageSkin, _super);
	function SharePopupPageSkin() {
		_super.call(this);
		this.skinParts = ["sharePyqBtn","shareWxBtn","closeBtn","_mainContent","$content"];
		
		this.height = 490;
		this.width = 652;
		this.elementsContent = [this._Rect1_i(),this.$content_i()];
		this.states = [
			new eui.State ("scale",
				[
					new eui.SetProperty("_mainContent","scaleX",1.2),
					new eui.SetProperty("_mainContent","scaleY",1.2)
				])
		];
	}
	var _proto = SharePopupPageSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.$content_i = function () {
		var t = new eui.Group();
		this.$content = t;
		t.height = 490;
		t.left = 0;
		t.top = 15;
		t.width = 652;
		t.elementsContent = [this._mainContent_i()];
		return t;
	};
	_proto._mainContent_i = function () {
		var t = new eui.Group();
		this._mainContent = t;
		t.height = 490;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 652;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this.sharePyqBtn_i(),this.shareWxBtn_i(),this._Image5_i(),this._Label3_i(),this._Label4_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 64;
		t.ellipseWidth = 64;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.sharePyqBtn_i = function () {
		var t = new eui.Group();
		this.sharePyqBtn = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.width = 508;
		t.y = 184;
		t.elementsContent = [this._Image1_i(),this._Rect4_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "others_json.btn3";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 120;
		t.ellipseWidth = 120;
		t.fillColor = 0x00cc88;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "others_json.create_view_icon_wechat1";
		t.x = 80;
		t.y = 16;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "VAGRounded";
		t.size = 40;
		t.text = "分享给小伙伴";
		t.x = 184;
		t.y = 40;
		return t;
	};
	_proto.shareWxBtn_i = function () {
		var t = new eui.Group();
		this.shareWxBtn = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.width = 508;
		t.y = 328;
		t.elementsContent = [this._Image3_i(),this._Rect5_i(),this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "others_json.btn2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 120;
		t.ellipseWidth = 120;
		t.fillColor = 0x449aff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "share_json.create_view_icon_friend";
		t.x = 80;
		t.y = 16;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "VAGRounded";
		t.size = 40;
		t.text = "分享到朋友圈";
		t.x = 184;
		t.y = 40;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "share_json.create_view_img_toto";
		t.x = 42;
		t.y = -66;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "VAGRounded";
		t.horizontalCenter = 0;
		t.size = 48;
		t.text = "分享";
		t.textColor = 0x333333;
		t.y = 40;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "VAGRounded";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "快把你的作品分享给大家吧！";
		t.textColor = 0x666666;
		t.y = 110;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "others_json.create_view_icon_close1";
		t.x = 665;
		t.y = 0;
		return t;
	};
	return SharePopupPageSkin;
})(eui.Skin);generateEUI.paths['resource/ui/coverlayer/StarsBarSkin.exml'] = window.StarBar = (function (_super) {
	__extends(StarBar, _super);
	function StarBar() {
		_super.call(this);
		this.skinParts = ["_bg","starsGroup"];
		
		this.height = 90;
		this.width = 258;
		this.elementsContent = [this._bg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.starsGroup_i()];
	}
	var _proto = StarBar.prototype;

	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.height = 90;
		t.source = "read_json.board";
		t.width = 258;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_dark_png";
		t.width = 54;
		t.x = 20;
		t.y = 16;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_dark_png";
		t.width = 54;
		t.x = 100;
		t.y = 16;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_dark_png";
		t.width = 54;
		t.x = 180;
		t.y = 16;
		return t;
	};
	_proto.starsGroup_i = function () {
		var t = new eui.Group();
		this.starsGroup = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return StarBar;
})(eui.Skin);generateEUI.paths['resource/ui/effectlayer/effectlayer.exml'] = window.effectlayer = (function (_super) {
	__extends(effectlayer, _super);
	function effectlayer() {
		_super.call(this);
		this.skinParts = ["leftImg","rightImg"];
		
		this.elementsContent = [this.leftImg_i(),this.rightImg_i()];
	}
	var _proto = effectlayer.prototype;

	_proto.leftImg_i = function () {
		var t = new eui.Image();
		this.leftImg = t;
		t.pixelHitTest = true;
		t.touchEnabled = false;
		t.x = 0;
		return t;
	};
	_proto.rightImg_i = function () {
		var t = new eui.Image();
		this.rightImg = t;
		t.pixelHitTest = true;
		t.touchEnabled = false;
		return t;
	};
	return effectlayer;
})(eui.Skin);generateEUI.paths['resource/ui/myWorks/ComboBoxLevel.exml'] = window.ComboBoxLevel = (function (_super) {
	__extends(ComboBoxLevel, _super);
	function ComboBoxLevel() {
		_super.call(this);
		this.skinParts = ["_titleTxt","_roundImg","_sl","_ls","_mask","_btn","_content"];
		
		this.height = 514;
		this.width = 160;
		this.elementsContent = [this._content_i()];
	}
	var _proto = ComboBoxLevel.prototype;

	_proto._content_i = function () {
		var t = new eui.Group();
		this._content = t;
		t.percentHeight = 100;
		t.touchChildren = true;
		t.touchThrough = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._titleTxt_i(),this._roundImg_i(),this._sl_i(),this._ls_i(),this._mask_i(),this._btn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 32;
		t.ellipseWidth = 32;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._titleTxt_i = function () {
		var t = new eui.Label();
		this._titleTxt = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.height = 52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x00d6d6;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._roundImg_i = function () {
		var t = new eui.Image();
		this._roundImg = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 5;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "myWorks_json.create_icon_down";
		t.top = 50;
		t.x = 69;
		return t;
	};
	_proto._sl_i = function () {
		var t = new eui.Scroller();
		this._sl = t;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 64;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	_proto._ls_i = function () {
		var t = new eui.List();
		this._ls = t;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto._mask_i = function () {
		var t = new eui.Rect();
		this._mask = t;
		t.ellipseHeight = 32;
		t.ellipseWidth = 32;
		t.fillColor = 0xf90c0c;
		t.height = 514;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_i = function () {
		var t = new eui.Rect();
		this._btn = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 64;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ComboBoxLevel;
})(eui.Skin);generateEUI.paths['resource/ui/myWorks/LevelComboboxItems.exml'] = window.LevelComboboxItemsSkin = (function (_super) {
	__extends(LevelComboboxItemsSkin, _super);
	function LevelComboboxItemsSkin() {
		_super.call(this);
		this.skinParts = ["_titleTxt","_content"];
		
		this.height = 61;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 160;
		this.elementsContent = [this._content_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = LevelComboboxItemsSkin.prototype;

	_proto._content_i = function () {
		var t = new eui.Group();
		this._content = t;
		t.percentHeight = 100;
		t.touchChildren = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._titleTxt_i()];
		return t;
	};
	_proto._titleTxt_i = function () {
		var t = new eui.Label();
		this._titleTxt = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x666666;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return LevelComboboxItemsSkin;
})(eui.Skin);generateEUI.paths['resource/ui/myWorks/MyWorksNode.exml'] = window.MyWorksNodeSkin = (function (_super) {
	__extends(MyWorksNodeSkin, _super);
	var MyWorksNodeSkin$Skin4 = 	(function (_super) {
		__extends(MyWorksNodeSkin$Skin4, _super);
		function MyWorksNodeSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","myWorks_json.create_btn_ranking")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","myWorks_json.create_btn_ranking")
					])
			];
		}
		var _proto = MyWorksNodeSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "myWorks_json.create_btn_ranking";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MyWorksNodeSkin$Skin4;
	})(eui.Skin);

	var MyWorksNodeSkin$Skin5 = 	(function (_super) {
		__extends(MyWorksNodeSkin$Skin5, _super);
		function MyWorksNodeSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","myWorks_json.create_icon_share")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","myWorks_json.create_icon_share")
					])
			];
		}
		var _proto = MyWorksNodeSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "myWorks_json.create_icon_share";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MyWorksNodeSkin$Skin5;
	})(eui.Skin);

	function MyWorksNodeSkin() {
		_super.call(this);
		this.skinParts = ["_coverImg","_coverMask","vbook","_scoreTxt","_timeTxt","_btnRank","_btnShare"];
		
		this.height = 300;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 616;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.vbook_i(),this._Group1_i(),this._Group2_i(),this._btnRank_i(),this._btnShare_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = MyWorksNodeSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 24;
		t.ellipseWidth = 24;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(25,25,150,150);
		t.source = "others_json.board1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.vbook_i = function () {
		var t = new eui.Group();
		this.vbook = t;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.x = 24;
		t.elementsContent = [this._Image2_i(),this._coverImg_i(),this._coverMask_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "myWorks_json.create_img_book";
		return t;
	};
	_proto._coverImg_i = function () {
		var t = new eui.Image();
		this._coverImg = t;
		t.height = 256;
		t.left = 0;
		t.top = 0;
		t.width = 200;
		return t;
	};
	_proto._coverMask_i = function () {
		var t = new eui.Image();
		this._coverMask = t;
		t.left = 0;
		t.source = "myWorks_json.create_default_img_read";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "myWorks_json.iphone_book_shadow";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 16;
		t.height = 58;
		t.right = 28;
		t.source = "myWorks_json.create_icon_play";
		t.width = 58;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.width = 345;
		t.x = 256;
		t.y = 33.3;
		t.elementsContent = [this._Image5_i(),this._Label1_i(),this._scoreTxt_i(),this._Rect2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "myWorks_json.create_icon_score";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "FZLanTYJW_Zhun";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "分数";
		t.textColor = 0xffaa00;
		t.x = 62.69999999999999;
		t.y = 8.700000000000003;
		return t;
	};
	_proto._scoreTxt_i = function () {
		var t = new eui.Label();
		this._scoreTxt = t;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "0123456789";
		t.textColor = 0xFFAA00;
		t.x = 160.7;
		t.y = 8.700000000000003;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 1.32;
		t.ellipseWidth = 1.32;
		t.fillColor = 0xdbe0eb;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 2;
		t.x = 142.7;
		t.y = 10.700000000000003;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.width = 345;
		t.x = 256;
		t.y = 112;
		t.elementsContent = [this._Image6_i(),this._Label2_i(),this._timeTxt_i(),this._Rect3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "myWorks_json.create_icon_time";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "FZLanTYJW_Zhun";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "时间";
		t.textColor = 0xFFAA00;
		t.x = 62.69999999999999;
		t.y = 8.700000000000003;
		return t;
	};
	_proto._timeTxt_i = function () {
		var t = new eui.Label();
		this._timeTxt = t;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "2019.07.23";
		t.textColor = 0xFFAA00;
		t.x = 160.7;
		t.y = 8.700000000000003;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 1.32;
		t.ellipseWidth = 1.32;
		t.fillColor = 0xDBE0EB;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 2;
		t.x = 142.7;
		t.y = 10.700000000000003;
		return t;
	};
	_proto._btnRank_i = function () {
		var t = new eui.Button();
		this._btnRank = t;
		t.label = "";
		t.x = 252;
		t.y = 196;
		t.skinName = MyWorksNodeSkin$Skin4;
		return t;
	};
	_proto._btnShare_i = function () {
		var t = new eui.Button();
		this._btnShare = t;
		t.label = "";
		t.x = 432;
		t.y = 196;
		t.skinName = MyWorksNodeSkin$Skin5;
		return t;
	};
	return MyWorksNodeSkin;
})(eui.Skin);generateEUI.paths['resource/ui/myWorks/MyWorksSKin.exml'] = window.MyWorksSKin = (function (_super) {
	__extends(MyWorksSKin, _super);
	function MyWorksSKin() {
		_super.call(this);
		this.skinParts = ["_emptyTxt","_empty","_sl","_ls","_cbG","_mainG","$content"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.$content_i()];
	}
	var _proto = MyWorksSKin.prototype;

	_proto.$content_i = function () {
		var t = new eui.Group();
		this.$content = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._mainG_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._mainG_i = function () {
		var t = new eui.Group();
		this._mainG = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this._Group2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xccf7f7;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "FZLanTYJW_ZhongCu";
		t.left = 96;
		t.size = 48;
		t.text = "我的创作";
		t.textColor = 0x14bdbd;
		t.top = 34;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._empty_i(),this._sl_i(),this._ls_i(),this._cbG_i()];
		return t;
	};
	_proto._empty_i = function () {
		var t = new eui.Group();
		this._empty = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._emptyTxt_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "myWorks_json.create_img_empty";
		t.verticalCenter = -9;
		t.x = 473;
		return t;
	};
	_proto._emptyTxt_i = function () {
		var t = new eui.Label();
		this._emptyTxt = t;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.text = "还没有作品哦，赶紧去创作自己的作品吧！";
		t.textColor = 0x076c6c;
		t.verticalCenter = 183;
		return t;
	};
	_proto._sl_i = function () {
		var t = new eui.Scroller();
		this._sl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 616;
		t.left = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 40;
		t.width = 1302;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	_proto._ls_i = function () {
		var t = new eui.List();
		this._ls = t;
		t.height = 616;
		t.width = 1302;
		t.x = 32;
		t.y = 112;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 16;
		t.orientation = "columns";
		t.verticalGap = 16;
		return t;
	};
	_proto._cbG_i = function () {
		var t = new eui.Group();
		this._cbG = t;
		t.height = 64;
		t.width = 160;
		t.x = 1140;
		t.y = 24;
		return t;
	};
	return MyWorksSKin;
})(eui.Skin);generateEUI.paths['resource/ui/rank/RankNode.exml'] = window.RankNodeSkin = (function (_super) {
	__extends(RankNodeSkin, _super);
	var RankNodeSkin$Skin6 = 	(function (_super) {
		__extends(RankNodeSkin$Skin6, _super);
		function RankNodeSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","rank_json.rank_btn_paly")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","rank_json.rank_btn_paly")
					])
			];
		}
		var _proto = RankNodeSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "rank_json.rank_btn_paly";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankNodeSkin$Skin6;
	})(eui.Skin);

	function RankNodeSkin() {
		_super.call(this);
		this.skinParts = ["_rankIcon","_rankLabel","_img","_mask","_nameTxt","_scoreTxt","_btnPlay"];
		
		this.height = 105;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 631;
		this.elementsContent = [this._rankIcon_i(),this._rankLabel_i(),this._Group1_i(),this._nameTxt_i(),this._Image1_i(),this._Label1_i(),this._scoreTxt_i(),this._Rect2_i(),this._btnPlay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = RankNodeSkin.prototype;

	_proto._rankIcon_i = function () {
		var t = new eui.Image();
		this._rankIcon = t;
		t.left = 11;
		t.source = "rank_json.rank_img_first";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._rankLabel_i = function () {
		var t = new eui.Label();
		this._rankLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.left = 0;
		t.size = 32;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0xbababa;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 59;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 72;
		t.verticalCenter = 0;
		t.width = 72;
		t.x = 66;
		t.elementsContent = [this._Rect1_i(),this._img_i(),this._mask_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 72;
		t.ellipseWidth = 72;
		t.fillColor = 0xffffff;
		t.height = 72;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_i = function () {
		var t = new eui.Image();
		this._img = t;
		t.height = 72;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 72;
		return t;
	};
	_proto._mask_i = function () {
		var t = new eui.Rect();
		this._mask = t;
		t.ellipseHeight = 72;
		t.ellipseWidth = 72;
		t.fillColor = 0xFFFFFF;
		t.height = 72;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._nameTxt_i = function () {
		var t = new eui.Label();
		this._nameTxt = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.size = 26;
		t.text = "名字名字名字名";
		t.textColor = 0x333333;
		t.verticalCenter = 0.5;
		t.width = 199;
		t.x = 154;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "rank_json.rank_icon_score_samll";
		t.verticalCenter = 0;
		t.x = 354;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.size = 26;
		t.text = "分数";
		t.textColor = 0xf5a623;
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._scoreTxt_i = function () {
		var t = new eui.Label();
		this._scoreTxt = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.size = 26;
		t.text = "99";
		t.textColor = 0xF5A623;
		t.verticalCenter = 0;
		t.x = 471;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffe000;
		t.height = 24;
		t.verticalCenter = 1;
		t.width = 1;
		t.x = 462;
		return t;
	};
	_proto._btnPlay_i = function () {
		var t = new eui.Button();
		this._btnPlay = t;
		t.label = "";
		t.touchEnabled = true;
		t.verticalCenter = 0.5;
		t.x = 561.26;
		t.skinName = RankNodeSkin$Skin6;
		return t;
	};
	return RankNodeSkin;
})(eui.Skin);generateEUI.paths['resource/ui/rank/RankPanel.exml'] = window.RankPanel = (function (_super) {
	__extends(RankPanel, _super);
	var RankPanel$Skin7 = 	(function (_super) {
		__extends(RankPanel$Skin7, _super);
		function RankPanel$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","rank_json.rank_btn_back2")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","rank_json.rank_btn_back2")
					])
			];
		}
		var _proto = RankPanel$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "rank_json.rank_btn_back2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankPanel$Skin7;
	})(eui.Skin);

	var RankPanel$Skin8 = 	(function (_super) {
		__extends(RankPanel$Skin8, _super);
		function RankPanel$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","rank_json.rank_btn_replay")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","rank_json.rank_btn_replay")
					])
			];
		}
		var _proto = RankPanel$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "rank_json.rank_btn_replay";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankPanel$Skin8;
	})(eui.Skin);

	var RankPanel$Skin9 = 	(function (_super) {
		__extends(RankPanel$Skin9, _super);
		function RankPanel$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","rank_json.rank_btn_share")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","rank_json.rank_btn_share")
					])
			];
		}
		var _proto = RankPanel$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "rank_json.rank_btn_share";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankPanel$Skin9;
	})(eui.Skin);

	function RankPanel() {
		_super.call(this);
		this.skinParts = ["_bg","_topBg","_rankTitle","_back","_coverImg","_coverMask","vbook","_scoreTxt","_rankTxt","_btnBack","_btnReplay","_btnShare","_starG","_star","_starTxt","_sl","_ls","_mainContent","_content","_mainG","$content"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.$content_i()];
	}
	var _proto = RankPanel.prototype;

	_proto.$content_i = function () {
		var t = new eui.Group();
		this.$content = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._content_i(),this._mainG_i()];
		return t;
	};
	_proto._content_i = function () {
		var t = new eui.Group();
		this._content = t;
		t.percentHeight = 100;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._bg_i(),this._topBg_i(),this._Image1_i(),this._rankTitle_i(),this._back_i(),this._mainContent_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Rect();
		this._bg = t;
		t.fillColor = 0xCCF7F7;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._topBg_i = function () {
		var t = new eui.Image();
		this._topBg = t;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rank_json.rank_img_bg";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "create_icon_back_white_png";
		t.visible = false;
		t.x = 32;
		t.y = 32;
		return t;
	};
	_proto._rankTitle_i = function () {
		var t = new eui.Label();
		this._rankTitle = t;
		t.fontFamily = "FZLanTYJW_ZhongCu";
		t.left = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "排行榜";
		t.textColor = 0xffffff;
		t.top = 44;
		t.x = 108;
		t.y = 41;
		return t;
	};
	_proto._back_i = function () {
		var t = new eui.Group();
		this._back = t;
		t.height = 70;
		t.right = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.width = 183;
		t.x = 1111;
		t.y = 48;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.scale9Grid = new egret.Rectangle(21,14,22,1);
		t.source = "others_json.btn1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "FZLanTYJW_Zhun";
		t.horizontalCenter = -8.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 27;
		t.text = "我的创作";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "rank_json.rank_icon_more";
		t.verticalCenter = 1.5;
		t.x = 142;
		return t;
	};
	_proto._mainContent_i = function () {
		var t = new eui.Group();
		this._mainContent = t;
		t.height = 582;
		t.horizontalCenter = 0;
		t.verticalCenter = 48;
		t.width = 1254;
		t.elementsContent = [this._Image4_i(),this._Group1_i(),this._Group3_i(),this._Rect7_i(),this._Rect8_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "rank_json.rank_img_title";
		t.x = 747;
		t.y = -86;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 582;
		t.width = 500;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Rect1_i(),this.vbook_i(),this._Rect2_i(),this._Image9_i(),this._Label2_i(),this._scoreTxt_i(),this._Rect3_i(),this._Image10_i(),this._Label3_i(),this._rankTxt_i(),this._Rect4_i(),this._btnBack_i(),this._btnReplay_i(),this._btnShare_i(),this._starG_i(),this._star_i(),this._Rect5_i(),this._Image11_i(),this._starTxt_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(25,25,150,150);
		t.source = "others_json.board1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 48;
		t.ellipseWidth = 48;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.vbook_i = function () {
		var t = new eui.Group();
		this.vbook = t;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.y = 86.12;
		t.elementsContent = [this._Image6_i(),this._coverImg_i(),this._coverMask_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "myWorks_json.create_img_book";
		return t;
	};
	_proto._coverImg_i = function () {
		var t = new eui.Image();
		this._coverImg = t;
		t.height = 256;
		t.width = 200;
		return t;
	};
	_proto._coverMask_i = function () {
		var t = new eui.Image();
		this._coverMask = t;
		t.source = "myWorks_json.create_default_img_read";
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "myWorks_json.iphone_book_shadow";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "myWorks_json.create_icon_play";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xecf0f3;
		t.height = 1;
		t.horizontalCenter = 0;
		t.width = 425;
		t.y = 413;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "rank_json.rank_icon_score_big";
		t.x = 43.35;
		t.y = 357;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "FZLanTYJW_Zhun";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "分数";
		t.textColor = 0xffaa00;
		t.x = 92.68;
		t.y = 365;
		return t;
	};
	_proto._scoreTxt_i = function () {
		var t = new eui.Label();
		this._scoreTxt = t;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xFFAA00;
		t.verticalAlign = "middle";
		t.x = 173.68;
		t.y = 365;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xecf0f3;
		t.height = 28.7;
		t.width = 1;
		t.x = 165.44;
		t.y = 367;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "rank_json.rank_icon_rank";
		t.x = 271;
		t.y = 357;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "FZLanTYJW_Zhun";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "排名";
		t.textColor = 0xFFAA00;
		t.x = 322.5;
		t.y = 365.35;
		return t;
	};
	_proto._rankTxt_i = function () {
		var t = new eui.Label();
		this._rankTxt = t;
		t.fontFamily = "FZLanTYJW_Zhun";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xFFAA00;
		t.verticalAlign = "middle";
		t.x = 405.5;
		t.y = 365.35;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xECF0F3;
		t.height = 28.7;
		t.width = 1;
		t.x = 395.26;
		t.y = 367.35;
		return t;
	};
	_proto._btnBack_i = function () {
		var t = new eui.Button();
		this._btnBack = t;
		t.label = "";
		t.visible = false;
		t.x = 38;
		t.y = 438;
		t.skinName = RankPanel$Skin7;
		return t;
	};
	_proto._btnReplay_i = function () {
		var t = new eui.Button();
		this._btnReplay = t;
		t.label = "";
		t.x = 90;
		t.y = 438;
		t.skinName = RankPanel$Skin8;
		return t;
	};
	_proto._btnShare_i = function () {
		var t = new eui.Button();
		this._btnShare = t;
		t.label = "";
		t.x = 290;
		t.y = 438;
		t.skinName = RankPanel$Skin9;
		return t;
	};
	_proto._starG_i = function () {
		var t = new eui.Group();
		this._starG = t;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 5;
		t.visible = false;
		t.width = 220;
		t.y = 22.77;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._star_i = function () {
		var t = new StarsBar();
		this._star = t;
		t.visible = false;
		t.x = 119;
		t.y = 2;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 45;
		t.ellipseWidth = 45;
		t.fillColor = 0xf5a623;
		t.height = 42;
		t.width = 85;
		t.x = 386.5;
		t.y = 22.5;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "rank_json.Group 5";
		t.x = 362;
		t.y = 16.5;
		return t;
	};
	_proto._starTxt_i = function () {
		var t = new eui.Label();
		this._starTxt = t;
		t.fontFamily = "FZLanTYJW_ZhongCu";
		t.size = 32;
		t.text = "999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 65;
		t.x = 409;
		t.y = 28;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 582;
		t.right = 0;
		t.top = 0;
		t.width = 737;
		t.elementsContent = [this._Image12_i(),this._Rect6_i(),this._sl_i(),this._ls_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(25,25,150,150);
		t.source = "others_json.board2";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 48;
		t.ellipseWidth = 48;
		t.fillColor = 0xfffbe5;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._sl_i = function () {
		var t = new eui.Scroller();
		this._sl = t;
		t.anchorOffsetY = 0;
		t.height = 548;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 631;
		t.x = 53;
		t.y = 32;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		return t;
	};
	_proto._ls_i = function () {
		var t = new eui.List();
		this._ls = t;
		t.height = 548;
		t.width = 631;
		t.x = 53;
		t.y = 32;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 23;
		t.ellipseWidth = 23;
		t.fillColor = 0xfacb03;
		t.height = 23;
		t.width = 48;
		t.x = 484;
		t.y = 53;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 23;
		t.ellipseWidth = 23;
		t.fillColor = 0xFACB03;
		t.height = 23;
		t.width = 48;
		t.x = 484;
		t.y = 507;
		return t;
	};
	_proto._mainG_i = function () {
		var t = new eui.Rect();
		this._mainG = t;
		t.fillAlpha = 0.6;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return RankPanel;
})(eui.Skin);generateEUI.paths['resource/ui/readlayer/ReadLayerSkin.exml'] = window.readlayerskin = (function (_super) {
	__extends(readlayerskin, _super);
	function readlayerskin() {
		_super.call(this);
		this.skinParts = ["container"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.container_i()];
	}
	var _proto = readlayerskin.prototype;

	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.height = 720;
		t.width = 1280;
		return t;
	};
	return readlayerskin;
})(eui.Skin);generateEUI.paths['resource/ui/userlayer/AttainmentCells.exml'] = window.AttainmentCells = (function (_super) {
	__extends(AttainmentCells, _super);
	function AttainmentCells() {
		_super.call(this);
		this.skinParts = ["_icon","_title","_numTxt","_vTxt"];
		
		this.height = 318;
		this.width = 240;
		this.elementsContent = [this._Rect1_i(),this._icon_i(),this._title_i(),this._Image1_i(),this._Group1_i()];
	}
	var _proto = AttainmentCells.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 80;
		t.ellipseWidth = 80;
		t.fillColor = 0xFFFFFF;
		t.height = 250;
		t.horizontalCenter = 0;
		t.width = 240;
		return t;
	};
	_proto._icon_i = function () {
		var t = new eui.Image();
		this._icon = t;
		t.horizontalCenter = 0;
		t.source = "ending_json.end_img_star";
		t.top = 0;
		return t;
	};
	_proto._title_i = function () {
		var t = new eui.Label();
		this._title = t;
		t.fontFamily = "FZLanTYJW_ZhongCu";
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.size = 32;
		t.text = "获得星星";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 167;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ending_json.end_img_board";
		t.x = 24;
		t.y = 223;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 76;
		t.width = 192;
		t.x = 24;
		t.y = 226;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._numTxt_i(),this._vTxt_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 8;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._numTxt_i = function () {
		var t = new eui.Label();
		this._numTxt = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "VAGRoundedCu";
		t.height = 75;
		t.horizontalCenter = -12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.text = "100";
		t.verticalAlign = "middle";
		t.x = 48;
		t.y = 0;
		return t;
	};
	_proto._vTxt_i = function () {
		var t = new eui.Label();
		this._vTxt = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "FZLanTYJW_ZhongCu";
		t.height = 75;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "颗";
		t.verticalAlign = "middle";
		t.x = 100;
		t.y = 0;
		return t;
	};
	return AttainmentCells;
})(eui.Skin);generateEUI.paths['resource/ui/userlayer/Endding.exml'] = window.Endding = (function (_super) {
	__extends(Endding, _super);
	var Endding$Skin10 = 	(function (_super) {
		__extends(Endding$Skin10, _super);
		function Endding$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ending_json.end_btn_rank")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","ending_json.end_btn_rank")
					])
			];
		}
		var _proto = Endding$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ending_json.end_btn_rank";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Endding$Skin10;
	})(eui.Skin);

	var Endding$Skin11 = 	(function (_super) {
		__extends(Endding$Skin11, _super);
		function Endding$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ending_json.end_btn_replay")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","ending_json.end_btn_replay")
					])
			];
		}
		var _proto = Endding$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ending_json.end_btn_replay";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Endding$Skin11;
	})(eui.Skin);

	var Endding$Skin12 = 	(function (_super) {
		__extends(Endding$Skin12, _super);
		function Endding$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ending_json.end_btn_share")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","ending_json.end_btn_share")
					])
			];
		}
		var _proto = Endding$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ending_json.end_btn_share";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Endding$Skin12;
	})(eui.Skin);

	function Endding() {
		_super.call(this);
		this.skinParts = ["_endTxt","_cellStar","_cellScore","_cellRank","_coverImg","_coverMask","vbook","_btnRank","_btnRerecord","_btnShare","_bookG","$content"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.$content_i()];
	}
	var _proto = Endding.prototype;

	_proto.$content_i = function () {
		var t = new eui.Group();
		this.$content = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._endTxt_i(),this._cellStar_i(),this._cellScore_i(),this._cellRank_i(),this._bookG_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ending_json.end_img_bg";
		t.top = 0;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._endTxt_i = function () {
		var t = new eui.Label();
		this._endTxt = t;
		t.anchorOffsetX = 340;
		t.anchorOffsetY = 80;
		t.fontFamily = "VAGRoundedCu";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 160;
		t.text = "THE END";
		t.textColor = 0x1ea3a3;
		t.y = 80;
		return t;
	};
	_proto._cellStar_i = function () {
		var t = new eui.Component();
		this._cellStar = t;
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 159;
		t.horizontalCenter = -297;
		t.skinName = "AttainmentCells";
		t.y = 395;
		return t;
	};
	_proto._cellScore_i = function () {
		var t = new eui.Component();
		this._cellScore = t;
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 159;
		t.horizontalCenter = 0;
		t.skinName = "AttainmentCells";
		t.y = 395;
		return t;
	};
	_proto._cellRank_i = function () {
		var t = new eui.Component();
		this._cellRank = t;
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 159;
		t.horizontalCenter = 297;
		t.skinName = "AttainmentCells";
		t.y = 395;
		return t;
	};
	_proto._bookG_i = function () {
		var t = new eui.Group();
		this._bookG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 589.4;
		t.width = 690.91;
		t.x = 337.72;
		t.y = 80;
		t.elementsContent = [this.vbook_i(),this._btnRank_i(),this._btnRerecord_i(),this._btnShare_i()];
		return t;
	};
	_proto.vbook_i = function () {
		var t = new eui.Group();
		this.vbook = t;
		t.horizontalCenter = -0.4549999999999841;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.x = 348.55;
		t.y = -7.49;
		t.elementsContent = [this._Image2_i(),this._coverImg_i(),this._coverMask_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ending_json.end_img_book";
		return t;
	};
	_proto._coverImg_i = function () {
		var t = new eui.Image();
		this._coverImg = t;
		t.height = 384;
		t.width = 300;
		return t;
	};
	_proto._coverMask_i = function () {
		var t = new eui.Image();
		this._coverMask = t;
		t.source = "ending_json.end_default_img_read";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ending_json.end_book_shadow";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 90;
		t.source = "myWorks_json.create_icon_play";
		t.verticalCenter = 137;
		return t;
	};
	_proto._btnRank_i = function () {
		var t = new eui.Button();
		this._btnRank = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 75;
		t.horizontalCenter = -210.45499999999998;
		t.label = "";
		t.y = 509.68;
		t.skinName = Endding$Skin10;
		return t;
	};
	_proto._btnRerecord_i = function () {
		var t = new eui.Button();
		this._btnRerecord = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 75;
		t.horizontalCenter = -0.4549999999999841;
		t.label = "";
		t.y = 509.68;
		t.skinName = Endding$Skin11;
		return t;
	};
	_proto._btnShare_i = function () {
		var t = new eui.Button();
		this._btnShare = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 75;
		t.horizontalCenter = 210.54500000000002;
		t.label = "";
		t.y = 509.68;
		t.skinName = Endding$Skin12;
		return t;
	};
	return Endding;
})(eui.Skin);generateEUI.paths['resource/ui/userlayer/OtherEnding.exml'] = window.OtherEnding = (function (_super) {
	__extends(OtherEnding, _super);
	var OtherEnding$Skin13 = 	(function (_super) {
		__extends(OtherEnding$Skin13, _super);
		function OtherEnding$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn_back")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn_back")
					])
			];
		}
		var _proto = OtherEnding$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "others_json.finish_btn_back";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OtherEnding$Skin13;
	})(eui.Skin);

	var OtherEnding$Skin14 = 	(function (_super) {
		__extends(OtherEnding$Skin14, _super);
		function OtherEnding$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn_replay")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn_replay")
					])
			];
		}
		var _proto = OtherEnding$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "others_json.finish_btn_replay";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OtherEnding$Skin14;
	})(eui.Skin);

	var OtherEnding$Skin15 = 	(function (_super) {
		__extends(OtherEnding$Skin15, _super);
		function OtherEnding$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn_read")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn_read")
					])
			];
		}
		var _proto = OtherEnding$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "others_json.finish_btn_read";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OtherEnding$Skin15;
	})(eui.Skin);

	var OtherEnding$Skin16 = 	(function (_super) {
		__extends(OtherEnding$Skin16, _super);
		function OtherEnding$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn_dub")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn_dub")
					])
			];
		}
		var _proto = OtherEnding$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "others_json.finish_btn_dub";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OtherEnding$Skin16;
	})(eui.Skin);

	var OtherEnding$Skin17 = 	(function (_super) {
		__extends(OtherEnding$Skin17, _super);
		function OtherEnding$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn1")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn1")
					])
			];
		}
		var _proto = OtherEnding$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "others_json.finish_btn1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OtherEnding$Skin17;
	})(eui.Skin);

	var OtherEnding$Skin18 = 	(function (_super) {
		__extends(OtherEnding$Skin18, _super);
		function OtherEnding$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn_replay")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","others_json.finish_btn_replay")
					])
			];
		}
		var _proto = OtherEnding$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "others_json.finish_btn_replay";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OtherEnding$Skin18;
	})(eui.Skin);

	function OtherEnding() {
		_super.call(this);
		this.skinParts = ["_endTxt","_backMyWorks","_replay","_myWorksEnd","_shareRead","_shareRecord","_shareEnd","_readRecordBtn","_restartBtn","_readEnd","_starBg1","_starBg2","_starBg3","_starG","_star1","_star2","_star3","$content"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.$content_i()];
	}
	var _proto = OtherEnding.prototype;

	_proto.$content_i = function () {
		var t = new eui.Group();
		this.$content = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._endTxt_i(),this._myWorksEnd_i(),this._shareEnd_i(),this._readEnd_i(),this._starG_i(),this._star1_i(),this._star2_i(),this._star3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ending_json.end_img_bg";
		t.top = 0;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._endTxt_i = function () {
		var t = new eui.Label();
		this._endTxt = t;
		t.anchorOffsetX = 340;
		t.anchorOffsetY = 80;
		t.fontFamily = "VAGRoundedCu";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 160;
		t.text = "THE END";
		t.textColor = 0x1EA3A3;
		t.y = 375;
		return t;
	};
	_proto._myWorksEnd_i = function () {
		var t = new eui.Group();
		this._myWorksEnd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 663.65;
		t.y = 565;
		t.elementsContent = [this._backMyWorks_i(),this._replay_i()];
		return t;
	};
	_proto._backMyWorks_i = function () {
		var t = new eui.Button();
		this._backMyWorks = t;
		t.label = "";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.skinName = OtherEnding$Skin13;
		return t;
	};
	_proto._replay_i = function () {
		var t = new eui.Button();
		this._replay = t;
		t.label = "";
		t.right = 0.19000000000005457;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.skinName = OtherEnding$Skin14;
		return t;
	};
	_proto._shareEnd_i = function () {
		var t = new eui.Group();
		this._shareEnd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 737.9;
		t.y = 565;
		t.elementsContent = [this._shareRead_i(),this._shareRecord_i()];
		return t;
	};
	_proto._shareRead_i = function () {
		var t = new eui.Button();
		this._shareRead = t;
		t.label = "";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.skinName = OtherEnding$Skin15;
		return t;
	};
	_proto._shareRecord_i = function () {
		var t = new eui.Button();
		this._shareRecord = t;
		t.label = "";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.skinName = OtherEnding$Skin16;
		return t;
	};
	_proto._readEnd_i = function () {
		var t = new eui.Group();
		this._readEnd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 663.65;
		t.y = 565;
		t.elementsContent = [this._readRecordBtn_i(),this._restartBtn_i()];
		return t;
	};
	_proto._readRecordBtn_i = function () {
		var t = new eui.Button();
		this._readRecordBtn = t;
		t.label = "";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.skinName = OtherEnding$Skin17;
		return t;
	};
	_proto._restartBtn_i = function () {
		var t = new eui.Button();
		this._restartBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 345.4599999999999;
		t.y = 0;
		t.skinName = OtherEnding$Skin18;
		return t;
	};
	_proto._starG_i = function () {
		var t = new eui.Group();
		this._starG = t;
		t.height = 88;
		t.horizontalCenter = 0;
		t.width = 258;
		t.y = 35;
		t.elementsContent = [this._Image2_i(),this._starBg1_i(),this._starBg2_i(),this._starBg3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "others_json.finish_img_board";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._starBg1_i = function () {
		var t = new eui.Image();
		this._starBg1 = t;
		t.source = "others_json.finish_img_star_dark";
		t.x = 32;
		t.y = 16;
		return t;
	};
	_proto._starBg2_i = function () {
		var t = new eui.Image();
		this._starBg2 = t;
		t.source = "others_json.finish_img_star_dark";
		t.x = 102;
		t.y = 16;
		return t;
	};
	_proto._starBg3_i = function () {
		var t = new eui.Image();
		this._starBg3 = t;
		t.source = "others_json.finish_img_star_dark";
		t.x = 172;
		t.y = 16;
		return t;
	};
	_proto._star1_i = function () {
		var t = new eui.Image();
		this._star1 = t;
		t.source = "others_json.finish_img_star";
		t.x = 50;
		t.y = 709;
		return t;
	};
	_proto._star2_i = function () {
		var t = new eui.Image();
		this._star2 = t;
		t.source = "others_json.finish_img_star";
		t.x = 380;
		t.y = 709;
		return t;
	};
	_proto._star3_i = function () {
		var t = new eui.Image();
		this._star3 = t;
		t.source = "others_json.finish_img_star";
		t.x = 1156;
		t.y = 709;
		return t;
	};
	return OtherEnding;
})(eui.Skin);generateEUI.paths['resource/ui/userlayer/userlayer.exml'] = window.userlayer = (function (_super) {
	__extends(userlayer, _super);
	function userlayer() {
		_super.call(this);
		this.skinParts = ["fingerBtn","_hs"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.fingerBtn_i(),this._hs_i()];
		this.states = [
			new eui.State ("record",
				[
				])
		];
	}
	var _proto = userlayer.prototype;

	_proto.fingerBtn_i = function () {
		var t = new eui.Image();
		this.fingerBtn = t;
		t.bottom = 143;
		t.source = "read_json.手指";
		t.visible = false;
		t.x = 1080;
		return t;
	};
	_proto._hs_i = function () {
		var t = new eui.HSlider();
		this._hs = t;
		t.anchorOffsetX = 0;
		t.left = 20;
		t.top = 20;
		t.visible = false;
		t.width = 400;
		return t;
	};
	return userlayer;
})(eui.Skin);