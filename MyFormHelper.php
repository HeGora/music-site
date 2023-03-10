<?php

class MyFormHelper
{
	protected $values = array();

	public function __construct($values = array())
	{
		if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
			$this->values = $_POST;

		}else{
			$this->values = $values;
		}
	}


	public function input($type, $attributes = array(), $setValue = false, $isMultiple = false)
	{
		$attributes['type'] = $type;
		if(($type == 'radio') || ($type == 'checkbox'))
		{
			if($this->isOptionSelected($attributes['name'] ?? null,
			 $attributes['value'] ?? null)){
				$attributes['checked'] = true;
			}
		}

		return $this->tag('input', $attributes, $setValue, $isMultiple);
	}

	public function textarea($attributes = array())
	{
		$name = $attributes['name'] ?? null;
		$value = $this->values[$name] ?? '';
		return $this->start('textarea', $attributes).
				htmlentities($value).
				$this->end('textarea');

	}

	public function select($options, $attributes = array())
	{
		$multiple = $attributes['multiple'] ?? false;
		return $this->start('select', $attributes, $multiple).
				$this->options($attributes['name'] ?? null, $options).
				$this->end('select');
	}

	public function tag($tag, $attributes = array(), $setValue = false, $isMultiple = false)
	{
		return "<$tag {$this->attributes($attributes, $setValue, $isMultiple)} />";
	}

	public function start($tag, $attributes = array(), $setValue = false, $isMultiple = false)
	{
		return "<$tag {$this->attributes($attributes, $setValue, $isMultiple)}>";
	}

	public function end($tag)
	{
		return "</$tag>";
	}


	protected function attributes($attributes, $setValue = false, $isMultiple = false)
	{
		$temp = array();
		if($setValue && isset($attributes['name'])
		 && array_key_exists($attributes['name'], $this->values))
		{
			$attributes['value'] = $this->values[$attributes['name']];
		}
		foreach($attributes as $k => $v)
		{
			if(is_bool($v)){
				if($v){
					$temp[] = $this->encode($k);
				}
			}
			else{
				$value = $this->encode($v);
				if($isMultiple && ($k == 'name')){
					$value .= '[]';
				}
				$temp[] = "$k=\"$value\"";
			}
		}
		return implode(' ', $temp);
	}

	public function isOptionSelected($name, $value)
	{
		if(!isset($this->values[$name])){
			return false;
		}
		if(is_array($this->values[$name])){
			return in_array($value, $this->values[$name]);
		}
		return $value == $this->values[$name];
	}

	public function options($name, $options)
	{
		$temp = array();
		foreach($options as $k => $v){
			$s = "<option value=\"{$this->encode($k)}\"";
			if($this->isOptionSelected($name, $k)){
				$s .= ' selected';
			}
			$s .= ">{$this->encode($v)}</option>";
			$temp[] = $s;
		}
		return implode('', $temp);
	}

	public function encode($str)
	{
		return htmlentities($str);
	}
}



?>