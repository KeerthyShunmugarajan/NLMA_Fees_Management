package com.feemanagement.demoFees.Mapper;

import com.feemanagement.demoFees.DTO.TabListDTO;
import com.feemanagement.demoFees.entity.ChildTabsList;
import com.feemanagement.demoFees.entity.RolesList;
import com.feemanagement.demoFees.entity.TabList;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Getter
@Setter
@Component
public class TabListMapper {

    private TabListDTO convertToTabListDTO(TabList tabList) {
        TabListDTO tabListDTO = new TabListDTO();
        tabListDTO.setId(tabList.getId());
        tabListDTO.setKey((tabList.getKey()));
        tabListDTO.setName(tabList.getName());
        tabListDTO.setComponent(tabList.getComponent());
        tabListDTO.setOrder(tabList.getOrder());
        if(!tabList.getRoles().isEmpty())
        {
            tabListDTO.setRoles(
                    tabList.getRoles().stream().
                            map(RolesList::getRoleName).
                            collect(Collectors.toList()));
        }
        if(!tabList.getChildTabs().isEmpty())
        {
            tabListDTO.setChildTabs(
                    tabList.getChildTabs().stream().
                            map(ChildTabsList::getChildTabName).
                            collect(Collectors.toList()));
        }

        return  tabListDTO;


    }

}
