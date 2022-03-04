from setuptools import setup, find_packages
with open('README.md') as f:
    long_description = f.read()

__version__ = "Undefined"
for line in open('pyCADD/__init__.py'):
    if line.startswith('__version__'):
        exec(line.strip())

setup(
    name='pyCADD',
    version=__version__,
    author='Yuhang Wu',
    author_email='yuhangxmu@stu.xmu.edu.cn',
    description='A Python Package for Computer-aid drug design',
    url='https://github.com/CyberCatQ/pyCADD',
    include_package_data=True,
    packages=find_packages(),
    install_requires=['rich>=10.16', 'ConcurrentLogHandler>=0.9',
                      r"scikit-learn", 'pandas>=0.19.2', 'matplotlib>=2.2.2', 'seaborn>=0.11.2', 'setuptools<58.0.0', 'openpyxl'],
    license='GNU General Public License v3.0',
    python_requires='>=3.5,<3.10',
    long_description=long_description,
    long_description_content_type='text/markdown',
    entry_points={
        'console_scripts': ['pyCADD = pyCADD.__main__:main', 'pycadd = pyCADD.__main__:main', 'pycadd-gauss = pyCADD.Gauss.__main__:main']
    }

)
