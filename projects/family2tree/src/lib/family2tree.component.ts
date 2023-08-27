import { Component, Input } from '@angular/core';
import { FamilyMembers } from './interface';

@Component({
  selector: 'lib-family2tree',
  template: `
   <div *ngIf="family_members" [ngClass]="family_members.spouses ? 'spouse' : ''">
  <div class="is-parent">
    <span
      class="user-details"
      [ngClass]="
        family_members.order == 0
          ? ' '
          : isFirst
          ? 'first-index-before'
          : 'user-details-before'
      "
    >
      <div
        class="d-flex align-items-center justify-content-between layout-inner"
      >
        <div class="img_top">
          <img
            src="assets/hexagonal.svg"
            *ngIf="family_members.user_detail.profile_pic == null"
            class="img-fluid"
            alt=""
          />
          <!-- <app-image-directive
            *ngIf="familyGraphList.user_detail.profile_pic != null"
            [src]="familyGraphList.user_detail.profile_pic"
          ></app-image-directive> -->
        </div>
        <div class="text_bottom">
          <h6
            class="text-muted org-chart-entity-name"
            title="{{ family_members.user_detail.first_name }} {{
              family_members.user_detail.last_name
            }}"
          >
            {{ family_members.user_detail.first_name }}
            {{ family_members.user_detail.last_name }}
          </h6>
          <div class="d-flex justify-content-end">
            <!-- <i
              class="fa fa-plus"
              [ngClass]="{ btn_hide: hideAddFamilyBtn == 'yes' }"
              style="cursor: pointer"
              (click)="addUpdateFamilyModalOpen(1, family_members.user_detail)"
              aria-hidden="true"
            ></i> -->
          </div>
        </div>
      </div>
    </span>
  </div>
  <div
    *ngFor="
      let spouse of family_members.spouses;
      let last = last;
      let i = index
    "
    class="is-spouse"
    id="spouse-width"
  >
    <div class="spouse-center">
      <div
        [ngClass]="
          last ? 'spouse-section border-before' : 'spouse-section border-after'
        "
      >
        <span class="spouse-detail">
          <!-- {{ spouse.spouse_detail.first_name }}{{ dynamic_width }}
          {{ spouse.spouse_detail.gender === 2 ? "F" : "M" }} -->
          <div
            class="d-flex align-items-center justify-content-between layout-inner"
          >
            <div class="img_top">
              <img
                src="assets/hexagonal.svg"
                *ngIf="spouse.spouse_detail.profile_pic == null"
                class="img-fluid"
                alt=""
              />
              <!-- <app-image-directive
            *ngIf="spouse.spouse_detail.profile_pic != null"
            [src]="spouse.spouse_detail.profile_pic"
          ></app-image-directive> -->
            </div>
            <div class="text_bottom">
              <h6
                class="text-muted org-chart-entity-name"
                title="{{ spouse.spouse_detail.first_name }} {{
                  spouse.spouse_detail.last_name
                }}"
              >
                {{ spouse.spouse_detail.first_name }}
                {{ spouse.spouse_detail.last_name }}
              </h6>
              <div class="d-flex justify-content-end">
                <!-- <i
              class="fa fa-plus"
              [ngClass]="{ btn_hide: hideAddFamilyBtn == 'yes' }"
              style="cursor: pointer"
              (click)="addUpdateFamilyModalOpen(1, family_members.user_detail)"
              aria-hidden="true"
            ></i> -->
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>

    <div [ngClass]="spouse.children ? 'childs-top-border' : ''"></div>
    <div class="is-child">
      <div
        *ngFor="let child of spouse.children; let first = first"
        class="child-section"
      >
        <lib-family2tree
          [family_members]="child"
          [isFirst]="first"
        ></lib-family2tree>
      </div>
    </div>
  </div>
</div>
  `,
 styleUrls: ['./family2tree.component.scss']
})
export class Family2treeComponent {
  @Input() family_members!: FamilyMembers;
  @Input() isFirst!: boolean;
}