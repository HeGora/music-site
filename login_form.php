<form name = "login_form" method="POST" action="<?=htmlentities($_SERVER['PHP_SELF'])?>">
	<table>
		<?php if($errors){?>
		<tr>
			<td><ul>
			<?php foreach($errors as $error){?>
				<li><?=$form->encode($error)?></li>
			<?php }?>
			</ul></td>
		<?php }?>
		</tr>
		<tr><td>login:</td>
			<td><?= $form->input('text', ['name'=>'login'], true)?>
		</td></tr>
				<tr><td>Password:</td>
			<td><?= $form->input('password', ['name'=>'password'])?>
		</td></tr>
		<td><?= $form->input('submit', ['value'=>'send']) ?></td>
	</table>
</form>








