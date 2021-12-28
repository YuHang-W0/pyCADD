import os
from datetime import datetime

from rich import box, print
from rich.console import Group
from rich.padding import Padding
from rich.panel import Panel
from rich.table import Column, Table
from rich.text import Text
from rich.prompt import Confirm, Prompt

date = datetime.now()
year = str(date.year)
month = str(date.month)
day = str(date.day)
now = "%s-%s-%s" % (year, month, day)


class UI:
    '''
    pyCADD程序用户交互界面(user interface)
    '''

    def __init__(self, menu_name: str = 'Main') -> None:
        self.version = '1.33'
        self.update_date = '2021-12-28'
        self.menu_name = '[bold magenta]Menu: %s' % menu_name
        self.options = ''
        self.additional_info = ''

    @property
    def title(self) -> None:
        '''
        程序标题样式
        '''
        return Text.assemble(
            ('pyCADD', 'bold medium_spring_green'), 
            ' -- A ', ('Python Package', 'bold yellow'), 
            ' For ', 
            ('Computer-aid Drug Design', 'bold cyan')
            )

    @property
    def basic_info(self) -> None:
        '''
        基础信息
        '''
        return Text.assemble(
            'Developer: ', 
            ('YuHang Wu', 'bold'), 
            ' ( School of Pharmaceutical Sciences, Xiamen University )'
            ,'\n', 'Github: https://github.com/CyberCatQ/pyCADD')

    @property
    def version_info(self) -> None:
        '''
        版本信息
        '''
        return Text.assemble(
            'Version ', 
            (self.version, 'bold blue'), 
            '   Last Update: ', 
            (self.update_date, 'bold blue')
            )

    @property
    def system_info(self) -> None:
        '''
        系统基本信息
        '''
        return Text.assemble(
            'Number of parallel threads:  ', 
            (str(os.cpu_count()), 'bold blue'), 
            '  Current date: ', 
            (now, 'bold blue')
            )

    def create_panel(self, options: list = None, additional_info: str = '', options_label:str='Analysis Options', show_panel:bool=True) -> None:
        '''
        建立并渲染UI
        Parameters
        ----------
        options : list
            选项框内容
        additional_info : str
            选项框上方的额外信息
        options_label : str
            选项框标签名
        show_panel : bool
            是否显示UI
        '''
        if options:
            self.options = options
        else:
            options = self.options

        if additional_info:
            self.additional_info = self.additional_info + '\n' + additional_info

        grid_upper = Table(Column(self.title, justify='center'),
                           expand=True, show_edge=False, box=box.SIMPLE, padding=(1, 1))

        #grid_upper.add_row(Padding(self.title, 1))
        #grid_upper.add_row('-' * 48)

        grid_mid = Table.grid(expand=True)
        grid_mid.add_column(justify='center')
        grid_mid.add_row(self.version_info)
        grid_mid.add_row(self.system_info)
        grid_mid.add_row(self.basic_info)

        grid_lower = Table.grid(expand=True, padding=(0, 3, 0, 3))
        grid_lower.add_column(justify='left')
        grid_lower.add_column(justify='left')

        if options:
            left_num = len(options) // 2
            right_num = len(options) - left_num
            for i in range(right_num):
                try:
                    left_index = i
                    right_index = i + right_num
                    left = options[left_index]
                    right = options[right_index]
                except IndexError:
                    right = ''
                grid_lower.add_row(left, right)

        if self.additional_info:
            additional_column = Padding(
                '[bold]' + self.additional_info, (1, 0, 0, 3))
        else:
            additional_column = ''

        self.panel = Panel(Group(
            grid_upper,
            grid_mid,
            additional_column,
            Padding(self.menu_name, (1, 0, 0, 3)),
            Panel(
                grid_lower, title='[bold]%s' % options_label, title_align='left', padding=(1, 2))), expand=False)
        
        if show_panel:
            print(self.panel)
    
    def get_input(self, text, choices:list=None, default=None, show_default=True, show_choices=False):
        '''
        读取输入指令 返回flag
        '''
        return Prompt.ask(text, choices=choices, default=default, show_choices=show_choices, show_default=show_default)
    
    def get_confirm(self, text, default=True):
        '''
        读取输入指令 返回确认值
        '''
        return Confirm.ask(text, default=default)
    
    def clear_info(self):
        '''
        清空额外信息内容
        '''
        self.additional_info = ''
