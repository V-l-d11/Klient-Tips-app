## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Boodstrap help

class .container - ограничивает максимальный размер сетки и выравнивает ее по центре

class .row - обозначение ряда

расстояние между колумнами указываем (через padding,margin)

class .col -гибкая колоннка которая занимает все доступное пространство
если в строке будет две .col - поделят на две равные части пространство

в Bootstrap -используются система из 12и колонок у нас появляются новые классы как (.col-1, .col-2,col-3 ... .col-12)
например .col-2 делит строку на 6 одинаковых колонок
Главное надо сделить за тем,чтоб в строке всегда было сумма ширин колонок 12, например в строке два div .col-6 (6+6=12) и в таком стиле

так же в ряду мы можем указать только у одного жлемента числовой размер,а второму дать класс просто .col (он просто займет все отавшиюся ширину,чтоб было в сумме 12 колонок)
